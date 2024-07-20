export const untilsCheckSunday = (num: number) => {
  if (num < 0) {
    return (num = 6)
  } else return num
}
