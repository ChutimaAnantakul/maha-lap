class mahalap {
  static tamnaiWithDay(day) {
    const days = {
      อาทิตย์: 1,
      จันทร์: 2,
      อังคาร: 3,
      พุธ: 4,
      พฤหัสบดี: 5,
      ศุกร์: 6,
      เสาร์: 7,
      สงกรานต์: 13,
      ฮาโลวีน: 31,
      คริสมาสต์: 25
    };
    return days[day] ? days[day] : 99;
  }

  static tamnaiWithStory(story) {
    const n = story.length;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum % 100;
  }

  static tamnaiWithTime(time) {
    const randomNumber = Math.random();
    if (time === "กลางวัน") {
      if (randomNumber >= 0.5) {
        return randomNumber;
      } else {
        return 0.5;
      }
    }
    if (time === "กลางคืน") {
      if (randomNumber >= 0.5) {
        return 0.5;
      } else {
        return randomNumber;
      }
    }
  }

  static namo(day, story, time) {
    const resultDay = this.tamnaiWithDay(day);
    const resultStory = this.tamnaiWithStory(story);
    const resultTime = this.tamnaiWithTime(time);
    return (resultDay * resultDay * resultStory * resultTime * 100) % 1000;
  }
}

module.exports = mahalap;
