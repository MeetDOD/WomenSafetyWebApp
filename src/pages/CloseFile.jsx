import React from "react";
import Sidebar from "../Components/Dash/Sidebar";

const Dashboard = (props) => {
  return (
    <div className="d-flex justify-content-start">
      <Sidebar />
      <div className="container table-responsive mx-3">
        <div className='features_wrapper' style={{ marginTop: '-50px' }}>
          <div className="row">
            <div className="col-12 text-center">
              <p className="features_subtitle">Latest Women Closed Alert !</p>
              <h2 className="features_title">Women Closed Data</h2>
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
            <tr >
              <th scope="row">Fname</th>
              <td>Report</td>
              <td>address</td>
              <td>pincode</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div >
  );
};

export default Dashboard;
