import validator from '../../utilities/validator';
describe('Test request width and height', (): void => {
  it('test with zero value', () => {
    expect(validator.validateNumber('0')).toBeFalse();
  });

  it('test with NaN value', () => {
    expect(validator.validateNumber('test')).toBeFalse();
  });
  it('test with number ', () => {
    expect(validator.validateNumber('53')).toBeTrue();
  });
});

describe('Test validation target function', () => {
  it('test with invalid target value', async () => {
    const results: boolean | string = await validator.validateTarget({ width: '20', height: '30', target: 'test' });
    expect(results).toBe(false);
  });
  it('test with invalid target value and invalid width', async () => {
    const results: boolean | string = await validator.validateTarget({ width: '-20', height: '30', target: 'test' });
    expect(results).toBe(false);
  });
});
