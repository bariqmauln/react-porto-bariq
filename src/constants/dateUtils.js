export function getDuration(startDate, endDate = null) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (end.getDate() < start.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const result = [];

  if (years > 0) result.push(`${years} yr`);
  if (months > 0) result.push(`${months} mo`);

  return result.join(" ");
}

export function formatPeriod(startDate, endDate = null) {
  const options = {
    month: "long",
    year: "numeric",
  };

  const start = new Date(startDate).toLocaleDateString("en-US", options);
  const end = endDate
    ? new Date(endDate).toLocaleDateString("en-US", options)
    : "Now";

  return `${start} - ${end}`;
}