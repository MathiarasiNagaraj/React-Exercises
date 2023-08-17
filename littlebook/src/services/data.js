import axios from "axios";
export const getBlogs = async () => {
   return  await axios.get('https://jsonmockserver.vercel.app/api/blogs').then((data)=>data.data).catch((err)=>console.log(err));
}

export const getUsers = async () => {
    return  await axios.get('https://jsonmockserver.vercel.app/api/users').then((data)=>data.data).catch((err)=>console.log(err));
 }