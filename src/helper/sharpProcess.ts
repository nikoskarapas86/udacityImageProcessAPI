import sharp from "sharp";
import ImageQueryParams from "../models/imageQueryParams";
const getMetadata = async (image: string): Promise<any> => {
  try {
    console.log("edw?????????");
    console.log(`images/${image}.png`);
    const metadata = await sharp(
      `assets/images/${image}.png`.toString()
    ).metadata();
    return metadata;
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
    throw new Error(`An error occurred during processing: ${error}`);
  }
};
const resizeImage = async (query: ImageQueryParams): Promise<any> => {
  try {
    const resizedImage =  await sharp(`assets/images/${query.target}.png`.toString())
      .resize({
        width: parseInt(query.width),
        height: parseInt(query.height),
      })
      .toFile(`assets/thumb/${query.target}_${query.width}x${query.height}.png`.toString());
     return resizedImage
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
export default { getMetadata, resizeImage };
