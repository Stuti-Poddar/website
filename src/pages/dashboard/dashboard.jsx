import React from "react";
import Navbar from "./../../components/Navbar/Navbar";
import "./../../components/Navbar/Navbar.css";
import Card from "./../../components/Card/Card";
import StickyBar from "./../../components/stickyBar/stickyBar";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import "./../../main.css";
import DynamicGraph from "./../../components/graph/graph";
import CircularGraph from "./../../components/CircGraph/circgraph";

function dashboard() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <StickyBar />
        <div className="dashboard-container">
          <div className="card-container">
            <Card
              icon={<RingVolumeIcon sx={{ fontSize: 50 }} />}
              color="orange"
              txt="Total calls"
              num="100"
            />
            <Card
              icon={<LocalFireDepartmentIcon sx={{ fontSize: 50 }} />}
              color="yellow"
              txt="Fire calls"
              num="60"
            />
            <Card
              icon={<LocalHospitalIcon sx={{ fontSize: 50 }} />}
              color="green"
              txt="Medical calls"
              num="20"
            />
            <Card
              icon={<CarCrashIcon sx={{ fontSize: 50 }} />}
              color="blue"
              txt="Accident calls"
              num="20"
            />
          </div>

          <div className="graph-section">
            <div className="circular-graph-wrapper">
              <CircularGraph />
            </div>
            <div className="dynamic-graph-wrapper">
              <DynamicGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
