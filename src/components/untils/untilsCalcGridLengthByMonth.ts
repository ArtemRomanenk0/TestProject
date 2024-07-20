export const untilsCalcGridLengthByMonth = (num: number) => {
  if (num % 7 === 0) {
    return num
  } else {
    return Math.ceil(num / 7) * 7
  }
}
