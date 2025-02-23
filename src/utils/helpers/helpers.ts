export function dhm(date: number) {
  const ms = Date.now() - date;

  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));

  const returnedDays = days < 1 ? '' : days + 'd';
  const returnedHours = hours < 1 ? '' : hours + 'h';
  const returnedMinutes = minutes < 1 ? '' : minutes + 'm';

  const ago = ' ago';
  if (days < 1 && hours < 1 && minutes < 1) return 'just now';
  else if (days < 1) return returnedHours + ' ' + returnedMinutes + ago;
  else if (days >= 1) return returnedDays + ago;
  else if (hours <= 1 && minutes > 1) return returnedMinutes + ago;
}
