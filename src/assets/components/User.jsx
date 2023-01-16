import React, {useState, useEffect} from 'react'
import axios from 'axios'


const getAllUsers = (users) => {
    return users;
}


const getUser = async (name) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/users/${name}`);
      const user = response.data;
      return user;
    } catch (error) {
      console.error(error);
    }
  }
const User = () => {

    const [users, setUsers] = useState([])

    

    useEffect(() => {
        axios.get('http://localhost:3000/api/user')
        .then(res => {
           console.log(res.data)
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)

        })
    }, [])
    getAllUsers(users);
    return (
    
        <div>
            <ul>
                {
                    users.map((user,index)=> <li key={index}>{user.fullName}</li>)
                }
            </ul>
            

        </div>
  )
}
export default User;