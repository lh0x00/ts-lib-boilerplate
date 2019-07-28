import { add } from '../'

test('exported `add` function', () => {
  expect(add).toBeInstanceOf(Function)
})
