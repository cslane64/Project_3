import axios from "axios";

export function getAll() {
    return axios.get("/api/contacts").then(res => res.data);
}