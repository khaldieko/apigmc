import { Fragment, React, useEffect, useState } from "react";
import axios from "axios";
import Users from "./Users";
export default function UserList() {
    const [pending, setpending] = useState(true)
    const [data, setdata] = useState(null)
    const [error, seterror] = useState(null)
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        if(data.data){
            setdata(data.data);
            setpending(false)
        }
       
      } catch (error) {
        seterror(error.message);
      }
    };
    getUsers();
  }, []);
  return (
      <>
      {data&&<Users data={data}/>}
      {error&&<div>{error}</div>}
      {pending&&<div>Loading...</div>}
      </>
  );
}
