import React from "react";
import Sidebar from "../Components/Dash/Sidebar";
import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";

const Dashboard = (props) => {
  const [incidentreport, setincidentreport] = useState([])

  const getAllIncident = async () => {
    try {
      const { data } = await axios.get('https://womensecbackend.onrender.com/api/v1/incidents')

      if (data) {
        setincidentreport(data)
      }
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllIncident();
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="d-flex justify-content-start">
      <Sidebar />
      <div className="container table-responsive mx-3">
        <div className='features_wrapper' style={{ marginTop: '-50px' }}>
          <div className="row">
            <div className="col-12 text-center">
              <p className="features_subtitle">Latest Women Incident Reported !</p>
              <h2 className="features_title">Women Incident Data</h2>
            </div>
          </div>
        </div>
        <table class="table table-striped table-bordered table-hover" style={{ marginTop: '-50px' }}>
          <thead className="table-dark text-center">
            <tr >
              <th scope="col">Name</th>
              <th scope="col">Report</th>
              <th scope="col">Address</th>
              <th scope="col">Pincode</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {incidentreport.map((p) => (
              <tr >
                <th scope="row">{p.uname}</th>
                <td>{p.report}</td>
                <td>{p.address}</td>
                <td>{p.pincode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >
  );
};

export default Dashboard;
