const validateNumber =  (num: string):boolean => {
  let widthOrHeight: number = parseInt(num);
  return !isNaN(widthOrHeight) && widthOrHeight > 0;
};
export default {validateNumber}