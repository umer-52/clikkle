import fs from "fs";
import path from "path";
import Markdoc from "@markdoc/markdoc";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "content/docs");

// The Markdoc configuration that maps custom {% tags %} to React components.
export const markdocConfig = {
  tags: {
    cards: {
      render: "Cards",
      description: "A grid wrapper for card items",
    },
    cards_item: {
      render: "CardsItem",
      attributes: {
        href: { type: String },
        title: { type: String },
      },
    },
    arrow_link: {
      render: "ArrowLink",
      attributes: {
        href: { type: String },
      },
    },
    // Adding dummy catch-alls for other common tags seen in Appwrite docs
    // to prevent build crashes until we fully design them
    info: { render: "Callout", attributes: { title: { type: String } } },
    warning: { render: "Callout", attributes: { title: { type: String } } },
    error: { render: "Callout", attributes: { title: { type: String } } },
    success: { render: "Callout", attributes: { title: { type: String } } },
    tabs: { render: "Tabs" },
    tabs_item: { render: "TabsItem", attributes: { title: { type: String } } },
    tabsitem: { render: "TabsItem", attributes: { title: { type: String } } },
    multi_code: { render: "MultiCode" },
    multicode: { render: "MultiCode" },
    step: { render: "Step" },
    steps: { render: "Steps" },
    accordion: { render: "Accordion" },
    accordion_item: { render: "AccordionItem" },
    cards_image_item: { render: "CardsImageItem" },
    icon: { render: "Icon", attributes: { name: { type: String } } },
    only_dark: { render: "OnlyDark" },
    only_light: { render: "OnlyLight" },
    partial: { render: "Partial", attributes: { file: { type: String } } },
    section: { render: "Section" },
    table: { render: "Table" },
    width: { render: "Width" },
  },
  nodes: {
    fence: {
      render: "CodeBlock",
      attributes: {
        language: { type: String },
        content: { type: String },
      },
    },
    heading: {
      render: "Heading",
      attributes: {
        id: { type: String },
        level: { type: Number },
      },
    },
    paragraph: {
      render: "Paragraph",
    },
    link: {
      render: "Link",
      attributes: {
        href: { type: String },
      },
    },
  },
};

export function getAllDocSlugs(): string[][] {
  const slugs: string[][] = [];

  function walk(dir: string, currentPath: string[]) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walk(fullPath, [...currentPath, file]);
      } else if (file.endsWith(".markdoc")) {
        const slugPart = file.replace(/\.markdoc$/, "");
        if (slugPart === "index") {
          slugs.push([...currentPath]);
        } else {
          slugs.push([...currentPath, slugPart]);
        }
      }
    }
  }

  walk(docsDirectory, []);
  
  // Filter out any empty arrays that might pop up for root index
  return slugs.filter(s => s.length > 0);
}

export function getDocBySlug(slugArray: string[]) {
  const relativePath = slugArray.join("/");
  
  // Appwrite marks directory roots sometimes as simply .markdoc with the dir name
  // or index.markdoc inside the dir. The migration script flattened most.
  let fullPath = path.join(docsDirectory, `${relativePath}.markdoc`);

  if (!fs.existsSync(fullPath)) {
    // If not found, check if it's an index.markdoc inside a folder
    fullPath = path.join(docsDirectory, relativePath, "index.markdoc");
    if (!fs.existsSync(fullPath)) {
      return null;
    }
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Parse YAML frontmatter
  const { data, content } = matter(fileContents);

  // Parse string content through Markdoc
  const ast = Markdoc.parse(content);
  
  // Extract Target Headings for TOC
  const toc: Array<{ id: string; title: string; level: number }> = [];
  for (const node of ast.walk()) {
    if (node.type === "heading" && (node.attributes.level === 2 || node.attributes.level === 3)) {
      // Markdoc usually assigns IDs or we fallback to stringified text
      const title = node.children
        .filter((child: any) => child.type === "text" || child.type === "inline")
        .map((child: any) => child.attributes?.content || child.children?.map((c: any) => c.attributes?.content).join(""))
        .join("");
        
      // Sometimes Appwrite explicitly assigns an ID in the markdoc {% #id %} 
      // If not, we slugify the title
      const rawId = node.attributes.id || title;
      const id = typeof rawId === 'string' ? rawId.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") : '';
      
      if (title && title.trim()) {
        toc.push({
          id,
          title: title.trim(),
          level: node.attributes.level
        });
      }
    }
  }

  // Transform AST against our custom tags config
  const renderedContent = Markdoc.transform(ast, markdocConfig);

  return {
    frontmatter: data,
    content: renderedContent,
    slug: relativePath,
    toc, // Added requested TOC array
  };
}

export type TutorialStepMeta = {
  step: number;
  title: string;
  href: string;
};

export function getTutorialSteps(frameworkSlug: string): TutorialStepMeta[] {
  const tutorialDir = path.join(docsDirectory, "tutorials", frameworkSlug);
  if (!fs.existsSync(tutorialDir)) return [];

  const files = fs.readdirSync(tutorialDir);
  const steps: TutorialStepMeta[] = [];

  for (const file of files) {
    if (file.endsWith(".markdoc")) {
      const fullPath = path.join(tutorialDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      
      if (data.step) {
        steps.push({
          step: parseInt(data.step, 10),
          title: data.title || `Step ${data.step}`,
          href: `/docs/tutorials/${frameworkSlug}/${file.replace(/\.markdoc$/, "")}`,
        });
      }
    }
  }

  return steps.sort((a, b) => a.step - b.step);
}
