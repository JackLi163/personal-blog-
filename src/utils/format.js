export default function (timestamp, isShowHour = false) {
  const date = new Date(+timestamp);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  if (isShowHour) {
    const hour = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day} ${hour}:${minutes}:${seconds}`;
  }
  return `${date.getFullYear()}-${month}-${day}`;
}
