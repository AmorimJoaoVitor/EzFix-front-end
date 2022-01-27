import axios from "axios";
import { parseCookies } from "nookies";

const cookies = parseCookies()

export let api = axios.create({
    baseURL: "http://34.151.229.209:8080",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Authorization": `Bearer ${cookies.token}`
    }
})

export function setToken(token) {
    api = axios.create({
        baseURL: "http://34.151.229.209:8080",
        headers: { Authorization: `Bearer ${token}` }
    })
}