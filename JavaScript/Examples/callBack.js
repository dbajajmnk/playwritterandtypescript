function fetchData(callback) {
  setTimeout(() => {
    callback("Data received")
  }, 1000)
}
const myCallBack=(data) => {
  console.log(data)
}
fetchData(myCallBack)



