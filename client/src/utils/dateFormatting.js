import moment from 'moment-timezone';
// import 'moment-timezone';

export function getFormattedDayAndTime(startDate, startTime, endTime) {
  const localTimezone = moment.tz.guess();

  const startDateMoment = moment(startDate);
  const day = startDateMoment.format('dddd, MMMM D, YYYY');
  const start = moment(startTime).tz(localTimezone).format('h:mm');
  const end = moment(endTime).tz(localTimezone).format('h:mm a z');
  return {
    day,
    time: `${start}-${end}`
  };
}

export function correctDatesForKeys(obj, keys) {
  const objClone = { ...obj };
  keys.forEach(key => {
    objClone[key] = moment(objClone[key]);
  });
  return objClone;
}
