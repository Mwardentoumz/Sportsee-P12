
import styled from "styled-components";
import InfoCard from "./Info";
import { useParams } from "react-router-dom";

import { getUserName } from "../service/user.service";
import { useEffect, useState } from "react";



export default function InfoList() {

    /** 
     * Get user data from API
     * Set data in state
     * @returns {void}
     * @param {number} id
     * @param {object} data
     * @param {object} keyData
     * 
    */

    const [data, setData] = useState([]);
    const { id } = useParams();
    let mock = false;

    useEffect(() => {
        const data = async () => {
          const request = await getUserName(id, mock);
          if (!request) return alert("data error");
          if(mock){
          setData(request);}
          if(!mock){
            setData(request.data);
          }
        };
        data();
      }, [id, mock]);
      if (data.length === 0) return null;

    const keyData = data.keyData

    return (
        keyData &&
        <InfoListContainer>

            <InfoCard type="Calories" value={keyData.calorieCount} />
            <InfoCard type="Protéines" value={keyData.proteinCount} />
            <InfoCard type="Glucides" value={keyData.carbohydrateCount} />
            <InfoCard type="Lipides" value={keyData.lipidCount} />
        </InfoListContainer>

    )
}



const InfoListContainer = styled.div`

display: grid;
    grid-template-rows: repeat(4,8.25rem);
    gap: 3rem;
    grid-template-columns: repeat(1,40rem);

    
`