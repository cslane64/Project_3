import axios from "axios";

export default function test () {
    return axios.get("/test").then(res => res.data);
    }
 