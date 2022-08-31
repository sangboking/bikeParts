/**
 * 
 * @param obj 객체
 * @param val 객체의 value값
 * @returns 객체에서 value를 가지고 있는 key 추출
 */
export function getKeyByValue(obj : any, val : string | number) {
  return Object.keys(obj).find(key => obj[key] === val);
}