import {
  Service,
  isValidReferenceVersion,
  resolveReferenceVersion,
  VALID_PLATFORMS,
  type ServiceValue,
} from "./constants";
import { getService } from "./specs";

export async function loadReferenceServicePageData(
  versionParam: string,
  platformParam: string,
  serviceSlug: string
): Promise<Awaited<ReturnType<typeof getService>> | null> {
  if (!isValidReferenceVersion(versionParam)) return null;
  if (!VALID_PLATFORMS.has(platformParam)) return null;

  const services = Object.values(Service) as string[];
  if (!services.includes(serviceSlug)) return null;

  const packVersion = resolveReferenceVersion(versionParam);

  try {
    return await getService(packVersion, platformParam, serviceSlug as ServiceValue);
  } catch {
    return null;
  }
}
