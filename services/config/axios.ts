import axios from 'axios'; 

export const apiInstance =   (baseURL: string) => axios.create({ baseURL }); 
