const DATE_OF_BIRTH = "07/21/2005";

export function getMyAge() {
  return ((Date.now() - new Date(DATE_OF_BIRTH).getTime()) / (60 * 60 * 24 * 365.25 * 1000))
    .toString()
    .split(".")[0];
}
