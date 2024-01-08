export function formatDate(inputDateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
  };
  const inputDate: Date = new Date(inputDateString);
  const formattedDate: string = inputDate.toLocaleDateString("en-US", options);
  return formattedDate;
}
