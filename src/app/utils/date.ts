const parseDate = (date: string) => {
  const [day, month, year] = date.split('/');
  return new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(day, 10)
  );
};

const isDateNear = (endDate: string, daysBefore: Number = 30) => {
  const endDateFormatted = parseDate(endDate);
  const today = new Date();
  const timeDifference = endDateFormatted.getTime() - today.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24);
  return daysDifference <= daysBefore;
};

export { parseDate, isDateNear };
