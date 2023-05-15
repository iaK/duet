import '../app/globals.css'
import Screen from "../components/screen"
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import Stats from "../components/stats";

function getRandomNumber() {
  return Math.random() * 100;
}

export function getData() {
  return [
    ["Label", "Value"],
    ["Memory", getRandomNumber()],
    ["CPU", getRandomNumber()],
    ["Network", getRandomNumber()],
  ];
}

export const options = {
//   width: 400,
//   height: 120,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 5,
};

export default function Home() {
    const [rpm, setRpm] = useState(1000);
    const [flow, setFlow] = useState(1.5);
    const [inputPressure, setInputPressure] = useState(2.1);
    const [throttle, setThrottle] = useState(60);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    let Time = dynamic(() => import('../components/time'), {
        ssr: false,
    });
    // setInterval(() => {
    //     console.log(isMounted, Time)
    // }, 1000);
    return (<Screen>
        <div>
            <div className="bg-gray-900 text-white px-4 py-2 flex justify-between items-center">
                <div>
                   {isMounted && <Time />}
                </div>
                <div className="flex space-x-2">
                    <div>18.5°C</div>
                </div>
            </div>
            <div className="flex px-6 pt-6 h-[200px]">
                <div className="flex flex-wrap justify-center relative w-1/4 px-2">
                    <Chart
                        chartType="Gauge"
                        width="100%"
                        height="400px"
                        data={[['Label', 'Value'], ['Varvtal', rpm]]}
                        options={{
                            max: 10000,
                            redFrom: 7000,
                            redTo: 100000,
                            yellowFrom: 5000,
                            yellowTo: 7000,
                            minorTicks: 10,
                        }}
                    />
                    {/* <GaugeChart id="gauge-chart1" 
                        nrOfLevels={3} 
                        percent={0.33} 
                        formatTextValue={value => value * 100  + ' rpm'}
                    />
                        <div className="">
                            Varvtal
                        </div> */}
                </div>
                <div className="flex flex-wrap justify-center relative w-1/4 px-2">
                    <Chart
                        chartType="Gauge"
                        width="100%"
                        height="400px"
                        data={[['Label', 'Value'], ['Throttle', throttle]]}
                        options={{
                            max: 100,
                            // redFrom: 3,
                            // redTo: 4,
                            // yellowFrom: 2.5,
                            // yellowTo: 3,
                            minorTicks: 5,
                        }}                
                    />
                    {/* <GaugeChart id="gauge-chart3" 
                        nrOfLevels={3} 
                        percent={0.15} 
                        formatTextValue={value => value / 10  + ' bar'}
                    />
                        <div className="">
                            Insugstryck
                        </div> */}
                </div>

                <div className="flex flex-wrap justify-center relative w-1/4 px-2">
                    <Chart
                        chartType="Gauge"
                        width="100%"
                        height="400px"
                        data={[['Label', 'Value'], ['Bränsleflöde', flow]]}
                        options={{
                            max: 5,
                            redFrom: 4,
                            redTo: 5,
                            yellowFrom: 3,
                            yellowTo: 4,
                            minorTicks: 5,
                        }}
                    />
                    {/* <GaugeChart id="gauge-chart2" 
                        nrOfLevels={3} 
                        percent={0.20} 
                        formatTextValue={value => value / 2  + ' lph'}
                    />
                        <div className="">
                            Bränsleflöde
                        </div> */}
                </div>
                <div className="flex flex-wrap justify-center relative w-1/4 px-2">
                    <Chart
                        chartType="Gauge"
                        width="100%"
                        height="400px"
                        data={[['Label', 'Value'], ['Insugstryck', inputPressure]]}
                        options={{
                            max: 4,
                            redFrom: 3,
                            redTo: 4,
                            yellowFrom: 2.5,
                            yellowTo: 3,
                            minorTicks: 5,
                        }}                />
                    {/* <GaugeChart id="gauge-chart3" 
                        nrOfLevels={3} 
                        percent={0.15} 
                        formatTextValue={value => value / 10  + ' bar'}
                    />
                        <div className="">
                            Insugstryck
                        </div> */}
                </div>
            </div>
            <div className="px-6 rounded-lg">
                <Stats />
            </div>
        </div>
    </Screen>)
}
