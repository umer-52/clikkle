import { getService } from "./specs";
import { groupMethodsByGroup, sortMethods } from "./method-helpers";

export async function generateServiceMarkdown(
  versionParam: string,
  platform: string,
  serviceName: string
): Promise<string | null> {
  try {
    const version = versionParam === "cloud" ? "1.8.x" : versionParam;
    const serviceData = await getService(version, platform, serviceName);

    const { service, methods } = serviceData;

    let markdown = `# ${service.name}\n\n`;
    if (service.description) {
      const cleanDescription = service.description.replace(/\[([^\]]+)]\([^)]+\)/g, "$1");
      markdown += `${cleanDescription}\n\n`;
    }

    markdown += `## Base URL\n\n`;
    markdown += `\`\`\`\n`;
    markdown += `https://<REGION>.cloud.appwrite.io/v1\n`;
    markdown += `\`\`\`\n\n`;

    if (methods.length === 0) {
      markdown += `*No endpoints found for this version and platform.*\n\n`;
      return markdown;
    }

    const groupedMethods = groupMethodsByGroup(methods);

    markdown += `## Endpoints\n\n`;

    for (const [group, groupMethods] of Object.entries(groupedMethods)) {
      if (group) {
        markdown += `### ${group}\n\n`;
      }

      const sortedMethods = sortMethods(groupMethods);

      for (const method of sortedMethods) {
        markdown += `#### ${method.title}\n\n`;

        if (method.description) {
          const cleanDescription = method.description.replace(/\[([^\]]+)]\([^)]+\)/g, "$1");
          markdown += `${cleanDescription}\n\n`;
        }

        markdown += `**Endpoint:** \`${method.method.toUpperCase()} ${method.url}\`\n\n`;

        if (method.parameters.length > 0) {
          markdown += `**Parameters:**\n\n`;
          markdown += `| Name | Type | Required | Description |\n`;
          markdown += `|------|------|----------|-------------|\n`;

          for (const param of method.parameters) {
            const required = param.required ? "Yes" : "No";
            const description =
              param.description?.replace(/\|/g, "\\|").replace(/\n/g, " ").trim() || "";
            markdown += `| ${param.name} | ${param.type} | ${required} | ${description} |\n`;
          }
          markdown += `\n`;
        }

        if (method.responses.length > 0) {
          markdown += `**Responses:**\n\n`;
          for (const response of method.responses) {
            markdown += `- **${response.code}**: ${response.contentType || "no content"}\n`;
            if (response.models && response.models.length > 0) {
              for (const model of response.models) {
                markdown += `  - [${model.name}](/docs/references/${versionParam}/models/${model.id})\n`;
              }
            }
          }
          markdown += `\n`;
        }

        if (method["rate-limit"] > 0) {
          markdown += `**Rate limits:** ${method["rate-limit"]} requests per ${method["rate-time"]} seconds\n\n`;
        }

        if (method.demo) {
          markdown += `**Example:**\n\n`;
          markdown += `\`\`\`${platform}\n`;
          markdown += `${method.demo}\n`;
          markdown += `\`\`\`\n\n`;
        }

        markdown += `---\n\n`;
      }
    }

    return markdown;
  } catch (error) {
    console.error("Error generating service markdown:", error);
    return null;
  }
}
