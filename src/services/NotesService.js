import httpComon from "../http-common";

const getAll = ()=>{
    return httpComon.get("/notes");
}

export default {getAll};