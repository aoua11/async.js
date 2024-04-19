// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
    }
  }
  
  // Task 02: Awaiting a Call
  async function awaitCall() {
    try {
      const response = await fetchDataFromAPI();
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
  // Task 03: Handling Errors with Async/Await
  async function awaitCall() {
    try {
      const response = await fetchDataFromAPI();
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
  // Task 04: Chaining Async/Await
  async function chainedAsyncFunctions() {
    await delayAndLog("First function");
    await delayAndLog("Second function");
    await delayAndLog("Third function");
  }
  
  async function delayAndLog(message) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(message);
  }
  
  // Task 05: Awaiting Concurrent Requests
  async function concurrentRequests() {
    try {
      const [result1, result2] = await Promise.all([fetchDataFromAPI(url1), fetchDataFromAPI(url2)]);
      console.log("Combined results:", result1, result2);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
