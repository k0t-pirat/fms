const addOptionalZero = (value) => value < 10 ? '0' + String(value) : String(value)

const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  const dateParts = {
    year: addOptionalZero(date.getFullYear()),
    month: addOptionalZero(date.getMonth() + 1),
    day: addOptionalZero(date.getDate()),
    hours: addOptionalZero(date.getHours()),
    minutes: addOptionalZero(date.getMinutes()),
    seconds: addOptionalZero(date.getSeconds()),
  }
  const {year, month, day, hours, minutes, seconds} = dateParts

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`
}

export {formatDate}
