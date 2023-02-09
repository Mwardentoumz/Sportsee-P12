

import styled from 'styled-components';




export default function Hello({name}){

/**
 * 
 * @returs {JSX}
 * 
 */
return(
        <Title>
            <h1>Bonjour {name}</h1>
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
