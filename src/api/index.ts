import axios from "axios";


export const HTTP = axios.create({
    baseURL: import.meta.env.VITE_API
});

export default({
    async getUsers(value: string){
        try {
            const response = await HTTP.get('/users') // params string
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
});

