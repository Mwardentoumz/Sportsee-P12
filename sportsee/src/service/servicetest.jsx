import axios from 'axios'; 
import { useState, useEffect } from 'react'; 
import { json } from 'react-router';

const URL = 'http://localhost:3000';


// Hook to extract data from SportSee API to feed the dashboard
/**
*@params {string} service
*@params {string} method
*@returns {undefined|object} data
*/

export default function useAPI(service, userId) {
    const [data, setData] = useState({undefined});
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const endpoint = getEndpointService(service, userId);

    useEffect(() => {
        if (!endpoint) return;
        setIsLoading(true);

        async function fetchData() {
            try {
                const url = `${URL}/user/12`;

                const response = await axios.get(url)
                    .then (response => {
                        JSON.stringify(response)
                        return response
                    })
                    .catch(error => {throw new Error(error)})
                console.log(response)
                const data = response.data
                const dataByService = resultByService(data, service);
                setData(dataByService);
                } catch (error) {
                    console.error(`Error fetching data from ${endpoint}: ${error}`);
                    setError(error);
                } finally {
                    setIsLoading(false);
                }
            }

            fetchData();
        }, [service, userId, endpoint]);

        return { data, isloading, error };
    }

/**
 * @param {string} service
 * @param {string} userId
 * @returns {string} endpoint linked to the service and the userId
 */

function getEndpointService(service, userId) {
    switch (service) {
        case 'daily-activity':
            return `user/${userId}/activity`;
        case 'average-session':
            return `user/${userId}/average-session`;
        case 'performance':
            return `user/${userId}/performance`;
        case 'firstName':
            return `user/${userId}`;
        case 'key-data':
            return `user/${userId}`;
        case 'today-score':
            return `user/${userId}`;
        default:
            return null;
    }
}

function resultByService(data, service) {
    console.log(data, service)
    if (data){
        switch (service) {
            case 'daily-activity':
                return data;
            case 'firstName':
                return getFirstName(data);
            default:
                return null;
        }
    }
}

function getFirstName(userData) {
    return userData === "can not get user"
      ? "unknown user"
      : userData.data.userInfos.firstName;
  }