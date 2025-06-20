// Debouncing
//👉 Ensures a function runs only after a delay (when no further calls are made within that time).

function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  function searchQuery() {
    console.log("Fetching search results...");
  }
  
  const debouncedSearch = debounce(searchQuery, 300); // Wait 300ms after last keypress
  
  document.getElementById("searchBox").addEventListener("input", debouncedSearch);
  

  //Throttling
  //Ensures a function runs at most once in a given interval, even if triggered multiple times.

  function throttle(func, interval) {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= interval) {
        lastCall = now;
        func.apply(this, args);
      }
    };
  }
  
  function logScroll() {
    console.log("Scrolling...");
  }
  
  const throttledScroll = throttle(logScroll, 1000); // Executes at most once per second
  
  window.addEventListener("scroll", throttledScroll);
  