import sharp from 'sharp';
import ImageQueryParams from '../models/imageQueryParams';

const resizeImage = async (query: ImageQueryParams): Promise<any> => {
  try {
    const resizedImage = await sharp(`assets/images/${query.target}.png`.toString())
      .resize({
        width: parseInt(query.width),
        height: parseInt(query.height),
      })
      .toFile(`assets/thumb/${query.target}_${query.width}x${query.height}.png`.toString());
    return resizedImage;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
export default { resizeImage };
