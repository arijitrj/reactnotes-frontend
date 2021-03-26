import axios from "axios";

export default axios.create({
   // baseURL:"http://localhost:8080/api",
   //production url-
    baseURL:"https://reactnotesbackendarijit091.herokuapp.com/api",
    headers:{
        "Content-type": "application/json"
    }
})