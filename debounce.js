function fetching() {
  //fetch("https://www.google.com");
  console.log("Fetching...");
}

function debounce(fn, time) {
  let timer;
  return (...rest) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...rest);
    }, time);
  };
}

const executeDebounce = debounce(fetching, 1000);
