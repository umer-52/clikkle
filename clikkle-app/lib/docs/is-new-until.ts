/** Appwrite `src/lib/utils/date.ts` `isNewUntil` */
export function isNewUntil(date: string): boolean {
  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) {
    return false;
  }
  return parsedDate.setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0);
}
