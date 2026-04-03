import fs from "fs";
import path from "path";
import Markdoc from "@markdoc/markdoc";
import matter from "gray-matter";
import {
  generateDynamicMarkdown,
  hasDynamicMarkdownGenerator,
} from "@/lib/references/markdown-generators";
import { getGeneratedReferenceSlugs } from "@/lib/references/static-slugs";
import { processMarkdownWithPartials } from "@/lib/markdoc/partials";
import { slugify } from "@/lib/markdoc/slugify";

const docsDirectory = path.join(process.cwd(), "content/docs");

function markdocNodeStartLine(node: { lines?: number[]; location?: { start?: { line?: number } } }): number {
  if (Array.isArray(node.lines) && typeof node.lines[0] === "number") {
    return node.lines[0];
  }
  const line = node.location?.start?.line;
  return typeof line === "number" ? line : 0;
}

function extractTocFromAst(ast: ReturnType<typeof Markdoc.parse>): Array<{
  id: string;
  title: string;
  level: number;
}> {
  const toc: Array<{ id: string; title: string; level: number; _line: number }> = [];
  for (const node of ast.walk()) {
    if (node.type === "tag" && node.tag === "section") {
      const title = node.attributes?.title;
      const idRaw = node.attributes?.id;
      if (typeof title === "string" && title.trim()) {
        const id =
          typeof idRaw === "string" && idRaw.trim()
            ? slugify(idRaw.trim())
            : slugify(title.trim());
        toc.push({ id, title: title.trim(), level: 2, _line: markdocNodeStartLine(node) });
      }
      continue;
    }
    // Markdoc uses markdown levels 1–6 (`#` … `######`). Appwrite Article layout registers
    // every in-body heading for “On this page”; we must include `level: 1` (`# Section`) or
    // security-style pages end up with an empty TOC and no right rail.
    const hLevel = node.attributes.level;
    if (node.type === "heading" && typeof hLevel === "number" && hLevel >= 1 && hLevel <= 6) {
      const title = node.children
        .filter((child: { type: string }) => child.type === "text" || child.type === "inline")
        .map(
          (child: {
            attributes?: { content?: string };
            children?: { attributes?: { content?: string } }[];
          }) =>
            child.attributes?.content ||
            child.children?.map((c) => c.attributes?.content).join("")
        )
        .join("");

      const idAttr = node.attributes.id;
      const id =
        typeof idAttr === "string" && idAttr.trim()
          ? slugify(idAttr.trim())
          : slugify(title.trim());

      if (title && title.trim()) {
        toc.push({
          id,
          title: title.trim(),
          level: hLevel,
          _line: markdocNodeStartLine(node),
        });
      }
    }
  }
  toc.sort((a, b) => a._line - b._line);
  return toc.map(({ _line: _unused, ...rest }) => rest);
}

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
        icon: { type: String },
        image: { type: String },
      },
    },
    cards_image_item: {
      render: "CardsImageItem",
      attributes: {
        href: { type: String },
        title: { type: String },
        light: { type: String },
        dark: { type: String },
      },
    },
    arrow_link: {
      render: "ArrowLink",
      attributes: {
        href: { type: String },
        title: { type: String },
      },
    },
    info: { render: "DocsInlineInfo", attributes: { title: { type: String } } },
    warning: { render: "DocsInlineInfo", attributes: { title: { type: String } } },
    error: { render: "DocsInlineInfo", attributes: { title: { type: String } } },
    success: { render: "DocsInlineInfo", attributes: { title: { type: String } } },
    tabs: { render: "Tabs" },
    tabs_item: {
      render: "TabsItem",
      attributes: {
        id: { type: String },
        title: { type: String },
      },
    },
    tabsitem: {
      render: "TabsItem",
      attributes: {
        id: { type: String },
        title: { type: String },
      },
    },
    multi_code: { render: "MultiCode" },
    multicode: { render: "MultiCode" },
    step: { render: "Step" },
    steps: { render: "Steps" },
    accordion: { render: "Accordion" },
    accordion_item: { render: "AccordionItem", attributes: { title: { type: String } } },
    icon: {
      render: "Icon",
      attributes: {
        icon: { type: String },
        size: { type: String },
      },
    },
    icon_image: {
      render: "IconImage",
      attributes: {
        src: { type: String },
        alt: { type: String },
        size: { type: String },
      },
    },
    only_dark: { render: "OnlyDark" },
    only_light: { render: "OnlyLight" },
    partial: { render: "Partial", attributes: { file: { type: String } } },
    section: {
      render: "Section",
      attributes: {
        id: { type: String },
        step: { type: Number },
        title: { type: String },
      },
    },
    table: { render: "Table" },
    width: { render: "Width" },
  },
  nodes: {
    fence: {
      render: "MarkdocFence",
      attributes: {
        language: { type: String },
        content: { type: String },
        process: { type: Boolean },
        withLineNumbers: { type: Boolean },
        toCopy: { type: String },
        badge: { type: String },
      },
    },
    heading: {
      render: "Heading",
      attributes: {
        id: { type: String },
        level: { type: Number },
      },
    },
    list: {
      render: "List",
      attributes: {
        ordered: { type: Boolean },
        start: { type: Number },
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
    table: {
      render: "DocsTable",
    },
    thead: {
      render: "Thead",
    },
    tbody: {
      render: "Tbody",
    },
    tr: {
      render: "Tr",
    },
    th: {
      render: "Th",
    },
    td: {
      render: "Td",
    },
    image: {
      render: "Image",
      attributes: {
        src: { type: String },
        alt: { type: String },
        width: { type: Number },
        height: { type: Number },
      },
    },
  },
};

/** Filesystem-backed docs only (excludes OpenAPI-generated reference slugs). */
export function getFilesystemDocSlugs(): string[][] {
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

  return slugs.filter((s) => s.length > 0);
}

/** All prerender slugs: `content/docs` + generator-backed `/docs/references/...` routes. */
export async function getAllDocSlugs(): Promise<string[][]> {
  const fromDisk = getFilesystemDocSlugs();
  const fromOpenApi = await getGeneratedReferenceSlugs();
  return [...fromDisk, ...fromOpenApi];
}

/**
 * Raw Markdoc/Markdown source for “Copy page” / `.md` URLs — Appwrite `getMarkdownContent` +
 * `processMarkdownWithPartials`.
 */
export async function getDocRawMarkdown(slugArray: string[]): Promise<string | null> {
  const relativePath = slugArray.join("/");
  const routeId = `/docs/${relativePath}`;

  if (hasDynamicMarkdownGenerator(routeId)) {
    const md = await generateDynamicMarkdown(routeId);
    if (!md) return null;
    return processMarkdownWithPartials(md);
  }

  let fullPath = path.join(docsDirectory, `${relativePath}.markdoc`);

  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(docsDirectory, relativePath, "index.markdoc");
    if (!fs.existsSync(fullPath)) {
      return null;
    }
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  return processMarkdownWithPartials(fileContents);
}

export async function getDocBySlug(slugArray: string[]) {
  const relativePath = slugArray.join("/");
  const routeId = `/docs/${relativePath}`;

  if (hasDynamicMarkdownGenerator(routeId)) {
    const md = await generateDynamicMarkdown(routeId);
    if (!md) return null;
    const withPartials = await processMarkdownWithPartials(md);
    const ast = Markdoc.parse(withPartials);
    const toc = extractTocFromAst(ast);
    const renderedContent = Markdoc.transform(ast, markdocConfig);
    return {
      frontmatter: {},
      content: renderedContent,
      slug: relativePath,
      toc,
    };
  }

  let fullPath = path.join(docsDirectory, `${relativePath}.markdoc`);

  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(docsDirectory, relativePath, "index.markdoc");
    if (!fs.existsSync(fullPath)) {
      return null;
    }
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const inlined = await processMarkdownWithPartials(fileContents);

  const { data, content } = matter(inlined);

  const ast = Markdoc.parse(content);
  const toc = extractTocFromAst(ast);
  const renderedContent = Markdoc.transform(ast, markdocConfig);

  return {
    frontmatter: data,
    content: renderedContent,
    slug: relativePath,
    toc,
  };
}

export type TutorialStepMeta = {
  step: number;
  title: string;
  href: string;
};

/** Appwrite `Tutorial` / `globToTutorial` — per-step metadata + shared difficulty/readtime from first step that defines them. */
export type TutorialStepFull = TutorialStepMeta & {
  fileSlug: string;
  difficulty?: string;
  readtime?: string | number;
};

export function getTutorialSteps(frameworkSlug: string): TutorialStepMeta[] {
  return getTutorialStepsFull(frameworkSlug).map(({ step, title, href }) => ({
    step,
    title,
    href,
  }));
}

export function getTutorialStepsFull(frameworkSlug: string): TutorialStepFull[] {
  const tutorialDir = path.join(docsDirectory, "tutorials", frameworkSlug);
  if (!fs.existsSync(tutorialDir)) return [];

  const files = fs.readdirSync(tutorialDir);
  const steps: TutorialStepFull[] = [];
  let sharedDifficulty: string | undefined;
  let sharedReadtime: string | number | undefined;

  for (const file of files) {
    if (!file.endsWith(".markdoc")) continue;
    const fullPath = path.join(tutorialDir, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    if (!data.step) continue;

    const fileSlug = file.replace(/\.markdoc$/, "");
    if (data.difficulty && sharedDifficulty === undefined) {
      sharedDifficulty = String(data.difficulty);
    }
    if (data.readtime !== undefined && sharedReadtime === undefined) {
      sharedReadtime = data.readtime;
    }

    steps.push({
      step: parseInt(String(data.step), 10),
      title: (data.title as string) || `Step ${data.step}`,
      href: `/docs/tutorials/${frameworkSlug}/${fileSlug}`,
      fileSlug,
      difficulty: data.difficulty ? String(data.difficulty) : undefined,
      readtime: data.readtime,
    });
  }

  steps.sort((a, b) => a.step - b.step);

  const diff = sharedDifficulty ?? steps.find((s) => s.difficulty)?.difficulty;
  const rt = sharedReadtime ?? steps.find((s) => s.readtime !== undefined)?.readtime;

  return steps.map((s) => ({
    ...s,
    difficulty: s.difficulty ?? diff,
    readtime: s.readtime ?? rt,
  }));
}

/** Series title from `step-1` frontmatter (`DocsTutorial` h1). */
export function getTutorialSeriesTitle(frameworkSlug: string): string {
  const p = path.join(docsDirectory, "tutorials", frameworkSlug, "step-1.markdoc");
  if (!fs.existsSync(p)) return frameworkSlug;
  const raw = fs.readFileSync(p, "utf8");
  const { data } = matter(raw);
  return (data.title as string) || frameworkSlug;
}

export function parseTutorialStepNumber(stepFileSlug: string): number {
  const m = stepFileSlug?.match(/^step-(\d+)$/);
  return m ? parseInt(m[1], 10) : 1;
}
