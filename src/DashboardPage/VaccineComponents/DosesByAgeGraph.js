import React, {useEffect} from 'react';
import style from './Graph.module.css'
import { ResponsiveBar } from '@nivo/bar'
const DosesByAgeGraph = ({vaccineByRisk}) =>{

    return(
        <div className={style.graphWrapper}>
            <h1>Doses for each risk group</h1>
            <ResponsiveBar
                data={vaccineByRisk}
                keys={['risk_group','doses' ]}
                indexBy="risk_group"
                margin={{ top: 50, right: 130, bottom: 100, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                valueFormat={{ format: '', enabled: false }}
                colors={{ scheme: 'nivo' }}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisTop={null}
                axisRight={null}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Risk group',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Doses',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}
export default DosesByAgeGraph;