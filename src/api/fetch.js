import axios from "axios";
const URL = import.meta.env.VITE_APP_API_URL;

export async function postNewRoom(body){
    let responseData;
  try {
    const response =  axios.post(`${URL}/meetingRooms`, body, {headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    
    },
});
responseData = (await response).data
} catch (error) {
console.error('Error creating new room:', error);
throw error;
}
return responseData;
}
export async function getMeetingRooms() {
    let responseData;
try {
const response = await axios.get(`${URL}/meetingRooms`);
 responseData = response.data;
} catch (error) {
console.error('Error fetching meeting rooms:', error);
throw error;
}
return responseData;
}

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