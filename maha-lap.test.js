const MahaLap = require("./maha-lap");
describe("Test Maha-Lap", () => {
  test("Test Tamnai wiht Monday", () => {
    const result = MahaLap.tamnaiWithDay("จันทร์");
    expect(result).toEqual(2);
  });

  test("Test Tamnai wiht Tuesday", () => {
    const result = MahaLap.tamnaiWithDay("อังคาร");
    expect(result).toEqual(3);
  });

  test("Test Tamnai wiht Sunday", () => {
    const result = MahaLap.tamnaiWithDay("อาทิตย์");
    expect(result).toEqual(1);
  });

  test("Test Tamnai wiht Wednesday", () => {
    const result = MahaLap.tamnaiWithDay("พุธ");
    expect(result).toEqual(4);
  });

  test("Test Tamnai wiht Thursday", () => {
    const result = MahaLap.tamnaiWithDay("พฤหัสบดี");
    expect(result).toEqual(5);
  });

  test("Test Tamnai wiht Friday", () => {
    const result = MahaLap.tamnaiWithDay("ศุกร์");
    expect(result).toEqual(6);
  });

  test("Test Tamnai wiht Saturday", () => {
    const result = MahaLap.tamnaiWithDay("เสาร์");
    expect(result).toEqual(7);
  });

  test("Test Tamnai wiht Songkran", () => {
    const result = MahaLap.tamnaiWithDay("สงกรานต์");
    expect(result).toEqual(13);
  });

  test("Test Tamnai wiht halloween", () => {
    const result = MahaLap.tamnaiWithDay("ฮาโลวีน");
    expect(result).toEqual(31);
  });

  test("Test Tamnai wiht Christmas", () => {
    const result = MahaLap.tamnaiWithDay("คริสมาสต์");
    expect(result).toEqual(25);
  });

  test("Test Tamnai with story Snake", () => {
    const result = MahaLap.tamnaiWithStory("งู");
    expect(result).toEqual(3);
  });

  test("Test Tamnai with story Cat", () => {
    const result = MahaLap.tamnaiWithStory("แมว");
    expect(result).toEqual(6);
  });

  test("Test Tamnai with story exes", () => {
    const result = MahaLap.tamnaiWithStory("แฟนเก่า");
    expect(result).toEqual(28);
  });

  test("Test Tamnai with story special alphabet", () => {
    const result = MahaLap.tamnaiWithStory("⊙▂⊙?");
    expect(result).toEqual(10);
  });

  test("Test Tamnai with story 3 space bar", () => {
    const result = MahaLap.tamnaiWithStory("   ");
    expect(result).toEqual(6);
  });

  test("Test Tamnai with story ผีเดินมาหัวเตียง", () => {
    const result = MahaLap.tamnaiWithStory("ผีเดินมาหัวเตียง");
    expect(result).toEqual(36);
  });

  test("Test Tamnai with story ผู้ชายปะแป้ง", () => {
    const result = MahaLap.tamnaiWithStory("ผู้ชายปะแป้ง");
    expect(result).toEqual(78);
  });

  test("Test Tamnai with time กลาง random = 0.98 return 0.98", () => {
    global.Math.random = jest.fn(() => 0.98);
    const result = MahaLap.tamnaiWithTime("กลางวัน");
    expect(result).toEqual(0.98);
  });

  test("Test Tamnai with time กลาง random = 0.5 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.5);
    const result = MahaLap.tamnaiWithTime("กลางวัน");
    expect(result).toEqual(0.5);
  });

  test("Test Tamnai with time กลาง random = 0.4 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.4);
    const result = MahaLap.tamnaiWithTime("กลางวัน");
    expect(result).toEqual(0.5);
  });

  test("Test Tamnai with time กลาง random = 0.32 return 0.32", () => {
    global.Math.random = jest.fn(() => 0.32);
    const result = MahaLap.tamnaiWithTime("กลางคืน");
    expect(result).toEqual(0.32);
  });

  test("Test Tamnai with time กลาง random = 0.5 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.5);
    const result = MahaLap.tamnaiWithTime("กลางคืน");
    expect(result).toEqual(0.5);
  });

  test("Test Tamnai with time กลาง random = 0.6 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.6);
    const result = MahaLap.tamnaiWithTime("กลางคืน");
    expect(result).toEqual(0.5);
  });

  test("Test Namo with ฝันวันจันทร์ ตอนกลางวัน เห็นงู ", () => {
    global.Math.random = jest.fn(() => 0.64);
    const result = MahaLap.namo("จันทร์", "งู", "กลางวัน"); // 2*223*0.64*100
    expect(result).toEqual(768);
  });

  test("Test Namo with ฮาโลวีน ตอนกลางคืน เห็นผีเดินมาหัวเตียง ", () => {
    global.Math.random = jest.fn(() => 0.32);
    const result = MahaLap.namo("ฮาโลวีน", "ผีเดินมาหัวเตียง", "กลางคืน"); // 31*31*36*0.32*100
    expect(result).toEqual(72);
  });

  test("Test Namo with สงกรานต์ ตอนกลางคืน ผู้ชายปะแป้ง ", () => {
    global.Math.random = jest.fn(() => 0.75);
    const result = MahaLap.namo("สงกรานต์", "ผู้ชายปะแป้ง", "กลางคืน"); // 13*13*78*0.5*100
    expect(result).toEqual(100);
  });
});
