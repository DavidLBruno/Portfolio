import axios from "axios";

let { REACT_APP_URL } = process.env;
/* Conect back */
export const sendMail = async (body) => {
  try {
    const response = await axios.post(REACT_APP_URL, body);
    return response;
  } catch (error) {
    console.log(error);
  }
};
