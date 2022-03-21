const validateNumber = (num: string): boolean => {
  const widthOrHeight: number = parseInt(num);
  return !isNaN(widthOrHeight) && widthOrHeight > 0;
};
export default { validateNumber };
