import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { useState, useEffect } from "react";
import axios from "../../node_modules/axios/index";

const React3Dra2 = (props) => {
  console.log("dra2".props);
  return (
    <div style={{ height: 300 }}>
      <ResponsiveRadialBar
        data={[
          {
            id: "ME",
            data: [
              {
                x: "단위 %",
                y: props.test1Data2,
              },
            ],
          },
          {
            id: "Other",
            data: [
              {
                x: "단위:%",
                y: props.test1Data,
              },
            ],
          },
        ]}
        valueFormat=" >-.2"
        maxValue={100}
        startAngle={120}
        endAngle={360}
        innerRadius={0}
        padding={0.4}
        colors={{ scheme: "accent" }}
        cornerRadius={2}
        margin={{ top: -90, right: 120, bottom: 40, left: 40 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        legends={[
          {
            // anchor: "",
            direction: "column",
            justify: false,
            translateX: 80,
            translateY: 0,
            itemsSpacing: 6,
            itemDirection: "left-to-right",
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            symbolSize: 18,
            symbolShape: "square",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default React3Dra2;
