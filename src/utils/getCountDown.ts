export const getTimeLeft = () => {
  const today = new Date();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const ms = tomorrow.getTime() - today.getTime();

  const offSetSeconds = Math.floor(ms / 1000);
  const seconds = (offSetSeconds % 60).toString().padStart(2, "0");

  if (offSetSeconds === 0) {
    localStorage.clear();
  }

  const offSetMinutes = Math.floor(offSetSeconds / 60);
  const minutes = (offSetMinutes % 60).toString().padStart(2, "0");

  const hours = Math.floor(offSetMinutes / 60)
    .toString()
    .padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};
