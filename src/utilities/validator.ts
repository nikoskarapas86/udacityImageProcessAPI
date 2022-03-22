const validateNumber = (num: string): boolean => {
  const widthOrHeight: number = parseInt(num);
  return !isNaN(widthOrHeight) && widthOrHeight > 0;
};
const validateTarget = (target: string): boolean => {
  const images:string[] =['encenadaport','fjord','icelandwaterfall','palmtunnel','santamonica']
  return images.includes(target)
};
export default { validateNumber,validateTarget };
