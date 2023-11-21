export const getDayOfTheWeek = () => {
  const formattedDaysOfTheWeek = {
    0: 'mon',
    1: 'tue',
    2: 'wed',
    3: 'thu',
    4: 'fri',
    5: 'sat',
    6: 'sun',
  }

  return formattedDaysOfTheWeek[new Date().getDay()];
};