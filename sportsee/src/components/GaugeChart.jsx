import styled from 'styled-components';
import { styleVar } from '../utils/styleColor';

import { getUserName } from '../service/user.service';
import { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

export default function SimpleChart() {

    const [data, setData] = useState()
    useEffect(() => {
        getUserName(18).then((data) => {
            setData(data.data.score)
        })
    }, [])

    const score = data
    const data01 = [
        { "name": "todayscore", "value": score, "fillColor": `${styleVar.primary500}` }, { "name": "notdoneyet", "value": 1 - score, "fillColor": "transparent" }]
    const data02 = [{ "name": "fillInWhite", "value": 1 }]
    console.log(data01)

    return (
        <SimpleChartContainer>
            <ScoreTitle>Score</ScoreTitle>
            <ResponsiveContainer width="100%" aspect={0.98}>
                <PieChart>
                    <Pie
                        data={data01}
                        dataKey="value"
                        nameKey="name"
                        innerRadius="70%"
                        outerRadius="80%"
                        startAngle={90}
                        endAngle={500}
                    >
                        {data01.map((entry, index) =>
                            index === 0 ? (
                                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
                            ) : (
                                <Cell key={`cell-${entry}`} fill="#FBFBFB" />
                            )
                        )}
                    </Pie>
                    <Pie
                        data={data02}
                        dataKey="value"
                        nameKey="name"
                        innerRadius="0%"
                        outerRadius="69%"
                        fill="#FFFFFF">

                    </Pie>

                </PieChart>
            </ResponsiveContainer>
            <PieLegend>

                <Gras>{data01[0].value * 100}%</Gras>
                <br />de votre
                <br />objectif
            </PieLegend>
        </SimpleChartContainer>
    )
}

const SimpleChartContainer = styled.div`
width: 27%;
height: 100%;
position: relative;
background-color: ${styleVar.neutral100};
border-radius: 5px;
`

const ScoreTitle = styled.h2`
position: absolute;
    display: flex;
    justify-content: center;
  align-items: center;

    font-weight: 500;
    margin: 0;
    left: 2rem;
    top: 2rem;`

const PieLegend = styled.p`

position: absolute;
font-size: 1rem;
text-align: center;
top: 29%;
left: 38%;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 26px;
color:#74798C;
`;

const Gras = styled.span`
font-style: bold;
color:#282D30;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 26px;
`

