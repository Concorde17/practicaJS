function countHours(year, holidays) {
  let count = 0
  holidays.forEach(element => {
    let d = new Date(element.concat("/", year)).getDay()
    if (d > 0 && d < 6) {
      count += 1
    }
  });
  return count * 2
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25']

console.log(countHours(year, holidays))