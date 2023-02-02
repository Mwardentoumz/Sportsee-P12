
import { getUserName } from '../service/user.service';
import styled from 'styled-components';
import { useState, useEffect } from 'react';



export default function Hello(){

/**
 * Get user data from API
 * Set data in state
 * @returns {void}
 * @param {number} id
 * @param {object} data
 * 
 */

// get the name of the user with a hook via service call

const [firstName, setFirstName] = useState(''); // useState is a hook

useEffect(() => {
    getUserName(12).then((data)=> {
        setFirstName(data.data.userInfos.firstName)})
     },[]) // getUserName is a service call





return(
        <Title>
            <h1>Bonjour {firstName}</h1>
            <Bravo>Félicitation ! Vous avez explosé vos objectifs hier 👏</Bravo>
        </Title>
    )
}

const Title = styled.div`
font-family: Roboto;
font-size: 24px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0px;
text-align: left;
height: 100%;
`

const Bravo = styled.div`
font-size: 18px;
font-weight: 400;
letter-spacing: 0px;
`
