// function setTimeExample(){
//     console.log("Start");
//     setTimeout(()=>{
//             console.log("Macro Task")
//     },2000);
//     console.log("End");
    
// }

// function callBackExample(callback){

//     setTimeout(()=>{
//         callback("We got API Respone")
//     },2000);

// }
// const callBack = (data)=>{
//     console.log(data.toUpperCase())
// }

// const promiseExample=()=>{
//     const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error Occured")
//   }, 1000)
// })

// //promise.then(result => console.log(result))
// promise.catch(result => console.log(result))
// }

// setTimeExample();
// callBackExample(callBack);
// promiseExample();

// async function asyncAwaitExample(){
//     return "Test";
// }
// async function simulationOfAsyncAwait(){
//     const result = await asyncAwaitExample()
//   console.log(result)
// }
// simulationOfAsyncAwait();

// async function loadUser(type,url) {

//   const res = await fetch(url)
//   const data = await res.json()
//   console.log("Type",type)
//   console.log("Url",url)
//   console.log("Data",data)
// }
// const listOfUrls = [{type:"comments",url:"https://jsonplaceholder.typicode.com/comments"}]

// listOfUrls.forEach((urlInfo)=>{
//     try{
//     loadUser(urlInfo.type,urlInfo.url);
//     }
//     catch(e){
//         console.log(e);
//     }
// })

const postUrl = 'https://jsonplaceholder.typicode.com/posts';
const postData={
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
async function createData(url,postData){

const res = await fetch(url, {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
  const data = await res.json()
 
  console.log("Url",url)
  console.log("Data",data)
    
}
createData(postUrl,postData);









