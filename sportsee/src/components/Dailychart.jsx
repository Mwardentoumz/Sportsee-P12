import styled from 'styled-components';
import { styleVar } from '../utils/styleColor';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getUserService from '../service/user.service.config';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function DailyChart() {

  /**
   * Get daily activity data from API
   * Set data in state
   * @returns {void}
   * @param {number} id
   * @param {object} data
   * 
   */

  const [data, setData] = useState([])
  let { id } = useParams()
  
  
  useEffect(() => {
    const data = async () => {
      const response = await getUserService().getDailyActivityById(id)
      console.log(response)
      if(!response) return alert('Une erreur est survenue')
      
      setData(response.data);
      
    };
    data()
  }, [id])

  for(let i = 0; i < data.length; i++) {
    data[i].day = i + 1
  }
  

  return (
    <DailyActivityChartContainer>
      <DailyActivityChartTitle>Activité quotidienne</DailyActivityChartTitle>

      <DailyActivityChartLegend>
        <LegendDetail>
          <ColorBullet background={`${styleVar.neutral800}`}></ColorBullet>
          Poids (kg)
        </LegendDetail>
        <LegendDetail>
          <ColorBullet background={`${styleVar.primary500}`}></ColorBullet>
          Calories brûlées (kCal)
        </LegendDetail>
      </DailyActivityChartLegend>

      <ResponsiveContainer height="100%" width="100%">
        <BarChart
          data={data}
          margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
          barGap={8}
          barCategoryGap="35%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={`${styleVar.neutral200}`}
          />
          <XAxis
            dataKey="day"
            dy={16}
            padding={{ left: -48, right: -48 }}
            stroke={`${styleVar.neutral400}`}
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            domain={["dataMin - 1", "dataMax + 2"]}
            allowDecimals={false}
            dx={48}
            orientation="right"
            stroke={`${styleVar.neutral400}`}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="cal"
            dataKey="calories"
            domain={[0, "dataMax + 50"]}
            hide={true}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            maxBarSize={8}
            fill={`${styleVar.neutral800}`}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            maxBarSize={8}
            fill={`${styleVar.primary500}`}
            radius={[50, 50, 0, 0]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              fill: "rgba(0, 0, 0, 0.1)",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </DailyActivityChartContainer>
  )
}

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <TooltipContainer>
        <TooltipLine background={`${styleVar.neutral800}`}>
          {`${payload[0].value} kg`}
        </TooltipLine>
        <TooltipLine background={`${styleVar.primary500}`}>
          {`${payload[1].value} kCal`}
        </TooltipLine>
      </TooltipContainer>
    );
  }
}

const DailyActivityChartContainer = styled.div`
  position: relative;
  height: 65%;
  background: ${styleVar.neutral100};
`;

const DailyActivityChartTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  @media (max-width: 1340px) {
    top: 1rem;
    left: 1.5rem;
  }
`;

const DailyActivityChartLegend = styled.div`
  display: flex;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  color: ${styleVar.neutral500};
  @media (max-width: 1340px) {
    top: 1rem;
    right: 1.5rem;
  }
`;

const LegendDetail = styled.p`
  margin: 0 0 0 2rem;
`;

const ColorBullet = styled.span`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.5rem 0 0;
  border-radius: 50%;
  background: ${(props) => props.background};
`;

const TooltipContainer = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const TooltipLine = styled.p`
  padding: 0.75rem;
  margin: 0;
  color: white;
  font-size: 0.7rem;
  font-weight: 500;
  background: ${(props) => props.background};
`;