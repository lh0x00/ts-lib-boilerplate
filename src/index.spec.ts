import { add } from './index';

test('exported `add` function', () => {
  expect(add).toBeInstanceOf(Function);
});
