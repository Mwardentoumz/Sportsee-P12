import styled from "styled-components";
import { styleVar } from "../utils/styleColor";

import { getAverageSessionsById } from "../service/user.service";
import { useEffect, useState } from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export default function AverageDuration() {

    /**
     * Get average sessions data from API
     * Set data in state
     * @returns {void}
     * @param {number} id
     * @param {object} data
     * 
     */

    const [data, setData] = useState()
    useEffect(() => {
        getAverageSessionsById(18).then((data) => {
            setData(data.data.sessions);
        });
    }, []);

    

    const Duration = data
    
    return (
        <AverageDurationContainer>
            <SessionTitre>Durée moyenne des
                <br />
                sessions
            </SessionTitre>

            <ResponsiveContainer width="100%" aspect={0.98}>
                <LineChart
                    data={Duration}
                    outerRadius="100%"
                    margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
                >
                    <XAxis
                        dataKey="day"
                        stroke="rgba(255, 255, 255, 0.6)"
                        axisLine={false}
                        dy={10}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fontWeight: 500,
                        }}
                    />
                    <YAxis
                        dataKey="sessionLength"
                        domain={[0, "dataMax + 60"]}
                        hide={true}
                    />
                    <Line
                        dataKey="sessionLength"
                        type={"monotone"}
                        stroke="rgba(255, 255, 255, 0.6)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            stroke: "rgba(255,255,255, 0.6)",
                            strokeWidth: 10,
                            r: 5,
                        }}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{
                            stroke: "rgba(0, 0, 0, 0.1)",
                            strokeWidth: 32,
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </AverageDurationContainer>
    )
}

function CustomTooltip({ active, payload }) {
    if (active && payload) {
        return <TooltipContainer>{`${payload[0].value} min`}</TooltipContainer>;
    }

    return null;
}

const AverageDurationContainer = styled.div`
    background: ${styleVar.primary500
    };
    position: relative;
    width: 27%;
    border-radius: 5px;
    
    ;`

const SessionTitre = styled.h2`
position: absolute;
top: 1.5rem;
left: 2rem;
text-align:left;
color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.5;`



const TooltipContainer = styled.p`
    padding: 0.5rem;
    font-size: 0.7rem;
    font-weight: 500;
    background: white;
  `;