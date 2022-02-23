// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temp = [12, 5, -5, 0, 4];

function printTemp(arr) {
  for (let i = 0; i < temp.length; i++) {
    console.log(
      `The temparature in ${i + 1}°C day${i + 1 === 1 ? "" : "s"} is ${temp[i]}`
    );
  }
}

printTemp(temp);
