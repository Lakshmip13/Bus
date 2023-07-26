
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Navbar from "./Navbar";

const Showprofile = () => {
    let {id}=useParams()
    let [user, setUser]=useState(null);
    let [error,setError]=useState(null);
    let [pending,setPending]=useState(true);


    useEffect(()=>{

        setUser(null);
        setPending(null);
        setTimeout(()=>{
            fetch("http://localhost:4000/user/"+id)
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data);
                 setUser(data) 
                setPending(false);
            })
            .catch((err)=>{
                //setError(err.message);})
                setError("404 Network issue please try again later!!!!")
                setPending(false);
              })
        }, 3000)
    },[id])


    return (
<div className="showprofile">
    <Navbar/>



<div className="deatils">
<h2>Name:{user.username}</h2>
<h2>Email:{user.email}</h2>

<h2>Phno:</h2>

<button>Logout</button>
<button>Delete</button>
<div>

<input type="submit" value="Active ticket"/>
<input type="submit" value="Premium booking"/>
<input type="submit" value="help desk" />

</div>

</div>
</div>

      );
}
 
export default Showprofile;