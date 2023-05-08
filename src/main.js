

function Test() {
  console.log("Test function")
}

Test.prototype.$get = function () {
  console.log('get')
}

Test.globalApi = function () {
  console.log('globalApi')
}

Test();

export default Test;