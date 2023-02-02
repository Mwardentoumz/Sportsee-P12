import axios from 'axios'; 


const URL = 'http://localhost:3000';

/**
 * functions to get specific user data from API endpoints
 * @param {*} userId 
 * @returns
 *  
 */

export async function getUserName(userId) {

    try{
        const response = await axios.get(`${URL}/user/${userId}`);
        return response.data
    }catch(error) {
        return [];
    }
    
}



export async function getDailyActivityById(userId){
    try{
        const response = await axios.get(`${URL}/user/${userId}/activity`);
        return response.data
    }catch(error) {
        return [];
    }
}

export async function getAverageSessionsById(userId){
    try{
        const response = await axios.get(`${URL}/user/${userId}/average-sessions`);
        return response.data
    }catch(error) {
        return [];
    }
}

export async function getPerformanceById(userId){
    try{
        const response = await axios.get(`${URL}/user/${userId}/performance`);
        return response.data
    }catch(error) {
        return [];
    }
}

export async function getGaugeById(userId){
    try{
        const response = await axios.get(`${URL}/user/${userId}/performance`);
        return response.data
    }catch(error) {
        return [];
    }
}