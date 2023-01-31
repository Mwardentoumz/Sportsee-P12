
import styled from "styled-components";
import InfoCard from "./Info";

import { getUserName } from "../service/user.service";
import { useEffect, useState } from "react";

export default function InfoList() {
    
    
    const [data, setData] = useState();

    useEffect(() => {
        
        getUserName(18).then((data) => {
            setData(data.data.keyData)
        })
    }, [data])

    const keyData = data
    console.log(keyData)
    

    
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