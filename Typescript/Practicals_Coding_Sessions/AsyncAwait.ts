interface Post {
 title: string,
    body: string,
    userId: number,
}

const newPostData:Post = {title:"AI with N8N",body:"This is great tool",userId:1};

const apiUrl:string = 'https://jsonplaceholder.typicode.com/posts';

async function createPost(url:string,postData:Post){

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
//createPost(apiUrl,newPostData);

async function fetchUser(): Promise<Post> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/100");
  const data: Post = await response.json();
  return data;
}
async function getPost() {
  const ourPost:Post = await fetchUser();
  console.log("Post",ourPost);
}
Promise.all([createPost(apiUrl,newPostData),getPost()])

//getPost();

interface User
  { id: number; name: string }


async function fetchData<T>(data: T): Promise<T> {
  return data;
}



const getUser = async()=>await fetchData<User>({
  id: 1,
  name: "Deepak"
});

const getMyPost = async()=>await fetchData<Post>({
  title: 'AI with N8N',
  body: 'This is great tool',
  userId: 1,
  
});

console.log("User",getUser())
console.log("My Post",getMyPost())
