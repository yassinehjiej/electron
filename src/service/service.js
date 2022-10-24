import axios from 'axios';

export async function getAllClients() {
    const response = await axios.get('http://localhost:3001/api/client');
    return response.data;
}
