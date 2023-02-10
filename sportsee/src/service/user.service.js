import axios from 'axios';
import MockedAPI from './mockedAPI';

export const user_service ={
    getUserName,
    getDailyActivityById,
    AverageSessionsById,
    getPerformanceById,
    getGaugeById
}

const URL = 'http://localhost:3000';

/**
 * functions to get specific user data from API endpoints
 * @param {*} userId 
 * @returns
 *  
 */

export async function getUserName(userId) {
        try {
            const response = await axios.get(`${URL}/user/${userId}`);
            return response.data
        } catch (error) {
            return [];
        }

    }




export async function getDailyActivityById(userId, mock) {
    if (mock) {
        const res = new MockedAPI.getDailyActivityById(Number(userId))
        return res
    } else {
        try {
            const response = await axios.get(`${URL}/user/${userId}/activity`);
            return response.data
        } catch (error) {
            return [];
        }
    }
}

export async function AverageSessionsById(userId, mock) {
    if (mock) {
        const res = new MockedAPI.getAverageSessionsById(Number(userId))
        console.log(res)
        return res
    } else {
        try {
            const response = await axios.get(`${URL}/user/${userId}/average-sessions`);
            return response.data
        } catch (error) {
            return [];
        }
    }
}

export async function getPerformanceById(userId, mock) {
    if (mock) {
        const res = MockedAPI.getDailyActivitiesById(Number(userId))
        console.log(res)
        return res
    }
    else {
        try {
            const response = await axios.get(`${URL}/user/${userId}/performance`);
            return response.data
        } catch (error) {
            return [];
        }
    }
}

export async function getGaugeById(userId) {
    try {
        const response = await axios.get(`${URL}/user/${userId}/performance`);
        return response.data
    } catch (error) {
        return [];
    }
}