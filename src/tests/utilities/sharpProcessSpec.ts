import ResizedImage from '../../models/resizedImage';
import sharp from '../../utilities/sharpProcess';
describe('Test resize image function', () => {
  it('test with invalid object', async () => {
    const results: ResizedImage | string = await sharp.resizeImage({ width: '20', height: '30', target: 'test' });
    expect(results).toBe('an error has been occured ,probably you insert invalid number on width height or target');
  });
  it('test with valid object', async () => {
    const results: ResizedImage | string = await sharp.resizeImage({
      width: '120',
      height: '130',
      target: 'icelandwaterfall',
    });
    expect(results).not.toBeInstanceOf(String);
  });
});
