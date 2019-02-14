import { sum } from './index';
describe("sum", () => {
  it("sum two numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});