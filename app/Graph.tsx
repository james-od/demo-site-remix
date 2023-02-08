import React, { useEffect } from "react";
import * as d3 from "d3";

function Graph() {

  useEffect(() => {
    async function fetchData() {
      // TODO, move this to server and use API key
      let response = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
      // TODO: type this with alpha vantage schema
      let data: any = await response.json()
      let parsedData = await Object.keys(data['Time Series (5min)']).map((datstr) => new Object({date: datstr, value: data['Time Series (5min)'][datstr]['1. open']}))
      await createGraph(parsedData);
      return data
    }
    fetchData();
  }, [])

  const createGraph = async (data) => {

    // read data from csv and format variables
    var parseTime = d3.timeParse("%Y-%m-%d %H:%M:%S");
  
    data.forEach((d) => {
      d.date = parseTime(d.date);
      d.value = +d.value;
    });

    // set the dimensions and margins of the graph
    var margin = { top: 20, right: 20, bottom: 50, left: 70 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // add X axis and Y axis
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    x.domain(d3.extent(data, (d) => { return d.date; }));
    y.domain([d3.min(data, (d) => { return d.value; })*0.99, d3.max(data, (d) => { return d.value; })*1.]);
  
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .attr("class", "axis")
      .call(d3.axisBottom(x));

    svg.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y));
      
    // add the Line
    var valueLine = d3.line()
    .x((d) => { return x(d.date); })
    .y((d) => { return y(d.value); });
  
    svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", valueLine);
  }


  return (
    <>

    </>
  );
}

export default Graph