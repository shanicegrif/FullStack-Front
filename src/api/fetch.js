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

export async function getOneMeetingRoom(id) {
  let responseData;
  try {
    const response = await axios.get(`${URL}/meetingRooms/${id}`);
    responseData = response.data;
  } catch (error) {
    console.error(`Error fetching meeting room with id ${id}:`, error);
    throw error;
  }
  return responseData;
}


export async function getBookings() {
    let responseData;
    try {
      const response = await axios.get(`${URL}/bookings`);
      responseData = response.data;
    } catch (error) {
      console.error('Error fetching bookings:', error);
      throw error;
    }
    return responseData;
  }

  export async function getOneBooking(id) {
    let responseData;
    try {
      const response = await axios.get(`${URL}/bookings/${id}`);
      responseData = response.data;
    } catch (error) {
      console.error(`Error fetching booking with id ${id}:`, error);
      throw error;
    }
    return responseData;
  }

  export async function deleteBooking(id) {
    try {
      const response = await axios.delete(`${URL}/bookings/${id}`);
      return response.data; 
    } catch (error) {
      console.error(`Error deleting booking with id ${id}:`, error);
      throw error;
    }
  }

  export async function postBooking(body) {
    try {
      const response = await axios.post(`${URL}/bookings`, body, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data; 
    } catch (error) {
      console.error('Error creating new booking:', error);
      throw error;
    }
  }