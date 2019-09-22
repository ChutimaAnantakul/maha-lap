const mahalap = require("./maha-lap");
describe("test maha-lap", () => {
  test("test tamnai with day", () => {
    const result = mahalap.tamnaiwithday("จันทร์");
    expect(result).toEqual(2);
  });
});
