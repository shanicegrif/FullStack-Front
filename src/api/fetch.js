import axios from "axios";
const URL = import.meta.env.VITE_APP_API_URL;

export async function postNewRoom(body){
    return await axios.post(`${URL}/meetingRooms`, body, {headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }});
};

export async function getMeetingRooms(){
    return await axios.get(`${URL}/meetingRooms`);
};

export async function getOneRoom(id){
    return await axios.get(`${URL}/meetingRooms/${id}`);
};