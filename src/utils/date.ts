export const getMonth = (month: number) => {
  switch (month) {
    case 0:
      return 'Jan';
    case 1:
      return 'Feb';
    case 2:
      return 'Mar';
    case 3:
      return 'Apr';
    case 4:
      return 'May';
    case 5:
      return 'Jun';
    case 6:
      return 'Jul';
    case 7:
      return 'Aug';
    case 8:
      return 'Sep';
    case 9:
      return 'Oct';
    case 10:
      return 'Nov';
    default:
      return 'Dec';
  }
};

export const formatDate = (date: string) => {
  const d = new Date(date);
  const month = getMonth(d.getMonth());
  const day = d.getDate();
  const year = d.getFullYear();
  return `${month} ${day}, ${year}`;
};
