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

export async function getOneMeetingRoom(id){
    return await axios.get(`${URL}/meetingRooms/${id}`);
};

export async function getBookings(){
    return await axios.get(`${URL}/bookings`);
};

export async function getOneBooking(id){
    return await axios.get(`${URL}/bookings/${id}`);
};

export async function deleteBooking(id){
    return await axios.delete(`${URL}/bookings/${id}`);
};

export async function postBooking(body){
    return await axios.post(`${URL}/bookings`, body, {headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }});
};