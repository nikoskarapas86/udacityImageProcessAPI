import sharp from 'sharp';
import ImageQueryParams from '../models/imageQueryParams';
import ResizedImage from '../models/resizedImage';

const resizeImage = async (query: ImageQueryParams): Promise<ResizedImage | string> => {
  try {
    const resizedImage: ResizedImage = await sharp(`assets/images/${query.target}.png`.toString())
      .resize({
        width: parseInt(query.width),
        height: parseInt(query.height),
      })
      .toFile(`assets/thumb/${query.target}_${query.width}x${query.height}.png`.toString());
    return resizedImage;
  } catch (error) {
    return "an error has been occured ,probably you insert invalid number on width height or target"
  }
};
export default { resizeImage };
