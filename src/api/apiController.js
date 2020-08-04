import axios from 'axios';

const HOST = 'http://localhost:3000';
class ApiController {
  isUserAlreadyExisted = async (username) => {
    let response;
    try {
      response = await axios.post(`${HOST}/usercheck`, { username });
    } catch (error) {
      console.error(error);
    }
    return response;
  }

   getUsersOnline = async () => {
     let response;
     try {
       response = await axios.post(`${HOST}/usersonline`);
     } catch (error) {
       console.log(error);
     }
     return response;
   }

  setUserOnline = async (username) => {
    let response;
    try {
      response = await axios.post(`${HOST}/adduser`, { username });
    } catch (error) {
      console.log(error);
    }
    return response;
  }
}
const api = new ApiController();
export default api;
