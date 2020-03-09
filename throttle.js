function fetching() {
  //fetch("https://www.google.com");
  console.log("Fetching...");
}

function throttle(fn, time) {
  let flag = true;
  return (...rest) => {
    if (flag) {
      fn(...rest);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, time);
    }
  };
}

const executeThrottle = throttle(fetching, 1000);
