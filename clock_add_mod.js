function addMinutes(oldTime, minToAdd) {
  //convert str format to numbers
  const [oldHrs, oldMin] = oldTime.split(":").map(str => Number(str))
  const oldTotalMin = (oldHrs * 60) + oldMin;
  const newTotalMin = oldTotalMin + minToAdd;
  const newHrsHand = ((Math.floor(newTotalMin/60) - 1) % 12) + 1;
  const newMinsHand = newTotalMin % 60;
  return `${newHrsHand}:${newMinsHand > 9 ? newMinsHand : `0${newMinsHand}`}`;
}
