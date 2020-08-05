import axios from 'axios';

class ApiController {
  isUserAlreadyExisted = async (username) => {
    let response;
    try {
      response = await axios.post('/usercheck', { username });
    } catch (error) {
      console.error(error);
    }
    return response;
  }

   getUsersOnline = async () => {
     let response;
     try {
       response = await axios.post('/usersonline');
     } catch (error) {
       console.log(error);
     }
     return response;
   }

  setUserOnline = async (username) => {
    let response;
    try {
      response = await axios.post('/adduser', { username });
    } catch (error) {
      console.log(error);
    }
    return response;
  }
}
const api = new ApiController();
export default api;
