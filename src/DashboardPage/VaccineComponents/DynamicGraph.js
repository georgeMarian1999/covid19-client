import React, {useEffect} from 'react';
import style from './DynamicGraph.module.css'
import * as d3 from 'd3'
const DynamicGraph = ({vaccineByRisk}) =>{
    const width = 600;
    const height = 300;
    const divRef = React.useRef(null);

    const margin = { top : 30, right: 30, bottom: 30, left: 60 };
    const svgWidth = width + margin.left + margin.right;
    const svgHeight = height + margin.top + margin.bottom;
    useEffect(()=>{
        drawData(vaccineByRisk);
    },[]);
    const drawData = (data) =>{
        const canvasHeight = 400
        const canvasWidth = 600
        const scale = 20
        const svgCanvas = d3.select(divRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid black")
        svgCanvas.selectAll("rect")
            .data(data).enter()
            .append("rect")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .attr("fill", "orange")
            .attr("x", (datapoint, iteration) => iteration * 45)
            .attr("y", (datapoint) => canvasHeight - datapoint.sum * scale)
    }
    return(
        <div className={style.graphWrapper}>
            <div ref={divRef}></div>
        </div>
    )
}
export default DynamicGraph;