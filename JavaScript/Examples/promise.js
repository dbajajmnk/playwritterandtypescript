const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success")
  }, 1000)
})

promise.then(result => console.log(result))

const promisee = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Failure")
  }, 1000)
})

promisee.catch(result => console.log(result))