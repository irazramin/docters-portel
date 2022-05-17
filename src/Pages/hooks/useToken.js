import { useEffect, useState } from "react";

function useToken (user) {
    const [token,setToken] = useState('');
    useEffect(() =>{
        const email = user?.user?.email;
        const currentUser = {email:email}
        if(email){
            fetch(`https://immense-beach-40730.herokuapp.com/user/${email}`, {
                method:"PUT",
                headers:{
                    "Content-type": "application/json"
                },
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                   setToken(data.token)
                   localStorage.setItem('accessToken',data.token);
                   console.log(data.token)
                   console.log(data)
            })
        }
    },[user, setToken])

    return [user];
}
export default useToken