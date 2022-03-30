import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzk0ZGRhMjcwYjc1ZTk0ODYyM2Y2YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODU1OTg2NiwiZXhwIjoxNjQ4ODE5MDY2fQ.9tPNfhT_HEAO0J_HH2q6t-dFqRMhLbnpfuFEPTbjQ6o";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
})