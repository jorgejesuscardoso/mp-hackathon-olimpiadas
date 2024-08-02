
export const handleHour = (date: string) => {
  const hour = new Date(date).getHours().toString().padStart(2, '0');
  const minutes = new Date(date).getMinutes().toString().padStart(2, '0');

  const formattedHour = +hour % 12 || 12; 
  const period = +hour < 12 ? 'AM' : 'PM';

  return `${formattedHour.toString().padStart(2, '0')}:${minutes} ${period}`;
};

export const handleDate = (date: string) => {
  /* const day = new Date(date).getDate().toString().padStart(2, '0');
  const month = (new Date(date).getMonth() + 1).toString().padStart(2, '0');
  const year = new Date(date).getFullYear(); */

  return date.split('-').reverse().join('/');
};
