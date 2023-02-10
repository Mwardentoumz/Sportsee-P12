import styled from "styled-components";
import { styleVar } from "../utils/styleColor";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";
import { getPerformanceById } from "../service/user.service";

export default function Performance() {
    

    const [data, setData] = useState([])
    let { id } = useParams()
    let mock = false
  
  useEffect(() => {
    const data = async () => {
      const response = await getPerformanceById(id, mock)
      if(!response) return alert('Une erreur est survenue')
      const formatData = response.data.data.map((data) => {
                
        switch (data.kind) {
            case 1:
                return { ...data, kind: 'Cardio' };
            case 2:
                return { ...data, kind: 'Energie' };
            case 3:
                return { ...data, kind: 'Endurance' };
            case 4:
                return { ...data, kind: 'Force' };
            case 5:
                return { ...data, kind: 'Vitesse' };
            case 6:
                return { ...data, kind: 'Intensité' };
            default:
                return {...data };
        }
    });
    setData(formatData);
    }
    data()
  }, [id, mock])

    
    return (
        <PerformanceContainer>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={window.innerWidth > 1340 ? "70%" : "60%"} width="100%" height="100%" data={data}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke="white"
                        dy={4}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fontWeight: 500,
                        }}
                    />
                    <Radar
                        dataKey="value"
                        fill={`${styleVar.primary500}`}
                        fillOpacity={0.7}

                    />

                </RadarChart>
            </ResponsiveContainer>
        </PerformanceContainer>
    );
}

const PerformanceContainer = styled.div`
background-color: ${styleVar.neutral800};
border-radius: 5px;
width: 27%;
height: 100%;`;

