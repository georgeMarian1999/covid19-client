import React, {useEffect, useState} from 'react';
import graphStyle from './Graph.module.css';
import { ResponsivePie } from '@nivo/pie'
const DosesByGender = ({vaccineByGender})=>{
    const [data,setData]=useState([]);
    const createData =()=>{
        let auxdata = [];

            for(let i = 0; i <= vaccineByGender.length;i ++){
                if(vaccineByGender[i]!==undefined)
                auxdata.push({
                    id: vaccineByGender[i].gender,
                    label: vaccineByGender[i].gender,
                    value: vaccineByGender[i].sum,
                    color: vaccineByGender[i].gender=== 'Female' ? 'red': 'blue'
                })
            }
            setData(auxdata);


    }
    useEffect(()=>{
        createData();
    },[vaccineByGender])
    return(
        <div className={graphStyle.graphWrapper}>
            <h1>Total doses by gender</h1>
            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
                fill={[
                    {
                        match: {
                            id: 'Male'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'Female'
                        },
                        id: 'dots'
                    }]}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    }]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}

export default DosesByGender;