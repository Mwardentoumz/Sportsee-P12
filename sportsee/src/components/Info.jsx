import styled from "styled-components";
import { styleVar } from "../utils/styleColor";

import calorieIcon from "../assets/calories-icon.png";
import carbohydrateIcon from "../assets/carbs-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import lipidIcon from "../assets/fat-icon.png";

const iconType = {
    Calories: calorieIcon,
    Glucides: carbohydrateIcon,
    Protéines: proteinIcon,
    Lipides: lipidIcon,
};

const unitType = {

    Calories: "kCal",
    Glucides: "g",
    Protéines: "g",
    Lipides: "g",

};

const formatValue = (value) => {
    value = value.toString();

    if (value.length < 4) {
        return value;
    }

    return `${formatValue(value.slice(0, -3))}.${value.slice(-3)}`;

}

export default function InfoCard({ type, value }) {
    
    return (

        value &&
        <Card>
            <InfoContainer>
                <ActivityImg src={iconType[type]} alt={type} />

                <InfoData>
                    {value !== 0 ? `${formatValue(value)}${unitType[type]}` : "-"}


                    <InfoType>{type}</InfoType>
                </InfoData>
            </InfoContainer>
        </Card>
    )
}

const Card = styled.div`
background : ${styleVar.neutral100};
display: flex;
background: #fbfbfb;
text-align: left;
width:50%;
align-content: center;
align-items: center;
justify-content: center;
`

const InfoContainer = styled.div`
display: flex;
flex-direction: row;
width: 80%;
justify-content: space-evenly;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;

`

const ActivityImg = styled.img`
width: 60px;
height: 60px;`

const InfoData = styled.div`
display: flex;
flex-direction: column;
justify-content: center`

const InfoType = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
color: #74798C;`