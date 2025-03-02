let year = +prompt("Nhập năm:");
if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log(`${year} là năm nhuận`);
      } else {
        console.log(`${year} không phải năm nhuận`);
      }
    } else {
      console.log(`${year} là năm nhuận`);
    }
  } else {
    console.log(`${year} không phải năm nhuận`);
  }