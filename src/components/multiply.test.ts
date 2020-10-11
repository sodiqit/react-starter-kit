import { multiply } from './multiply';

describe('multiply', () => {
  it('should return 4', () => {
    const a = multiply(2, 2);

    expect(a).toBe(4);
  });
});
