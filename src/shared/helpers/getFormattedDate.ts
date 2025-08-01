export function getFormattedDate(isoString: string): string {
  const date = new Date(isoString);

  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // месяцы с 0
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}
