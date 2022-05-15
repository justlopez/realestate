import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
const { data } = await axios.get((url), {
headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': '9c4d547c1cmsh89c25cc4680b6d2p160787jsndfde9d06f284'
  },
   });
    
  return data;
}