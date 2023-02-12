import { useFetcher } from "@remix-run/react";
import React, { useEffect } from 'react';
import { Group } from '@visx/group';
import { curveBasis } from '@visx/curve';
import { LinePath } from '@visx/shape';
import { scaleTime, scaleLinear } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { GridRows, GridColumns } from '@visx/grid';

export const background = '#090C08';

// accessors
type Datum = {
  date: string;
  value: string;
}
const date = (d: Datum) => new Date(d.date).valueOf();
const value = (d: Datum) => Number(d['value']);

const defaultMargin = { top: 40, right: 30, bottom: 50, left: 40 };

export type GraphProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  symbol: string;
};

export type StockChartProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  parsedData: any;
};

function StockChart({width, height, parsedData, margin = defaultMargin}: StockChartProps){
    if (width < 10) return null;

    // scales
    const timeScale = scaleTime<number>({
      domain: [Math.min(...parsedData.map(date)), Math.max(...parsedData.map(date))],
    });
    const temperatureScale = scaleLinear<number>({
      domain: [Math.min(...parsedData.map(value)), Math.max(...parsedData.map(value))],
      nice: true,
    });  
  
  
    // bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;
  
    timeScale.range([0, xMax]);
    temperatureScale.range([yMax, 0]);

    return(
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
        <Group left={margin.left} top={margin.top}>
          <GridRows scale={temperatureScale} width={xMax} height={yMax} stroke="#090C08" />
          <GridColumns scale={timeScale} width={xMax} height={yMax} stroke="#090C08" />
          <line x1={xMax} x2={xMax} y1={0} y2={yMax} stroke="#E8F1F2" />
          <AxisBottom top={yMax} scale={timeScale} numTicks={width > 520 ? 10 : 5} axisClassName="axis"/>
          <AxisLeft scale={temperatureScale} axisClassName="axis"/>
          <text x="-70" y="15" transform="rotate(-90)" fontSize={10} className="text">
            Price ($)
          </text>
          <LinePath
            data={parsedData}
            curve={curveBasis}
            x={(d: Datum) => timeScale(date(d)) ?? 0}
            y={(d: Datum) => temperatureScale(value(d)) ?? 0}
            stroke="#F6AA1C"
            strokeWidth={1.5}
            strokeOpacity={0.8}
            strokeDasharray="1,2"
          />
        </Group>
      </svg>
    )
}


export default function Graph({ width, height, margin = defaultMargin, symbol }: GraphProps) {
  const fetcher = useFetcher()

  useEffect(() => {
    fetcher.load(`/query-data?symbol=${symbol}`)
  }, [symbol])

  return (
    <div>
      {fetcher.data ? 
        <StockChart width={width} height={height} margin={margin} parsedData={fetcher.data}/> :
        <p className="content">Alpha Vantage API limit exceeded</p>
      }
    </div>
  );
}
