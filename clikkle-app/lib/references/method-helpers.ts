import type { SDKMethod } from "./specs";

function getOperationOrder(methodTitle: string): number {
  const title = methodTitle.toLowerCase();
  if (title.startsWith("create")) return 1;
  if (title.startsWith("read") || title.startsWith("get") || title.startsWith("list")) return 2;
  if (title.startsWith("update")) return 3;
  if (title.startsWith("upsert")) return 4;
  if (title.startsWith("delete")) return 5;
  if (title.startsWith("increment")) return 6;
  if (title.startsWith("decrement")) return 7;
  return 8;
}

export function sortMethods(methods: SDKMethod[]): SDKMethod[] {
  return [...methods].sort((a, b) => {
    const orderA = getOperationOrder(a.title);
    const orderB = getOperationOrder(b.title);
    if (orderA === orderB) {
      return a.title.localeCompare(b.title);
    }
    return orderA - orderB;
  });
}

export function groupMethodsByGroup(methods: SDKMethod[]): Record<string, SDKMethod[]> {
  return methods.reduce<Record<string, SDKMethod[]>>((acc, method) => {
    const groupKey = method.group || "";
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(method);
    return acc;
  }, {});
}
