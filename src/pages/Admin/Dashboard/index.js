import React, { useEffect } from "react";
import "./style.css";
import { FaRegEye, FaRegBookmark, FaRegImages } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page Home",
    visitor: 2400,
  },
  {
    name: "Page Portfolio",
    visitor: 1398,
  },
  {
    name: "Page Blog",
    visitor: 2290,
  },
  {
    name: "Page Tools",
    visitor: 3908,
  },
];

const AdmDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="dashboard bg-white p-4">
      <h4>Dashboard</h4>
      <div className="mt-4">
        {/* SECTION WIDGET */}
        <div className="row">
          <div className="col-md-4 mb-2">
            <div className="widget p-3 d-flex align-items-center">
              <div className="icon-widget d-flex justify-content-center align-items-center">
                <FaRegEye color="white" size={30} />
              </div>
              <div className="px-3">
                <small>Views</small>
                <h6>1,000,212</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="widget p-3 d-flex align-items-center">
              <div className="icon-widget d-flex justify-content-center align-items-center">
                <FaRegBookmark color="white" size={30} />
              </div>
              <div className="px-3">
                <small>Click CV</small>
                <h6>938</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="widget p-3 d-flex align-items-center">
              <div className="icon-widget d-flex justify-content-center align-items-center">
                <FaRegImages color="white" size={30} />
              </div>
              <div className="px-3">
                <small>Portfolio</small>
                <h6>15</h6>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION CHART */}
        <div className="chart mt-4 row">
          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
              <LineChart
                width={600}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="visitor"
                  stroke="#2F3A8F"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmDashboard;
