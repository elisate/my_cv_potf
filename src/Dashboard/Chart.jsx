import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    // name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
  
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
  
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  renderTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const { uv } = payload[0].payload;
      return (
        <div style={{ backgroundColor: "white", padding: "5px" }}>
          <p>{`count: ${uv}`}</p>
        </div>
      );
    }
    return null;
  };

  render() {
    return (
      <div style={{ width: "23rem", height: "180px" }}>
        {/* Ensure the parent div has a defined size */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <Tooltip content={this.renderTooltip} />
            <Bar dataKey="pv" fill="none" />
            <Bar dataKey="uv" fill="none" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
