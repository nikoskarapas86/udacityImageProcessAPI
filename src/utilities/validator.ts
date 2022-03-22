 import { promises as fsPromises } from 'fs';
import path from "path";
import ImageQueryParams from '../models/imageQueryParams';


const imagesPath = path.resolve(__dirname, '../../assets/images/');

  const getAvailableImageNames=async(): Promise<string[]>=> {
  try {
    return (await fsPromises.readdir(imagesPath)).map(
      (name: string): string => name.split('.')[0]
    ); 
  } catch {
    return [];
  }
}

const validateNumber = (num: string): boolean => {
  const widthOrHeight: number = parseInt(num);
  return !isNaN(widthOrHeight) && widthOrHeight > 0;
};

const validateTarget =async (query: ImageQueryParams): Promise<boolean | string> => {
  try {
 const availableImages = await getAvailableImageNames();
 return availableImages.includes(query.target) && validateNumber(query.height) && validateNumber(query.width);
  } 
  catch(error){
    return "an error is been occured"
  }
 
};
export default { validateNumber,validateTarget };
