import React from "react";
import Sidebar from "../Components/Dash/Sidebar";

const ChatScreen = () => {
  return (
    <div className="d-flex ">
      <Sidebar />

      {/* <div className="border mx-5 mt-2 ">
        <p className="text-end">
          {" "}
          <i class="fa-solid fa-square-xmark fa-xl"></i>{" "}
        </p>
        <div class="card mt-3 mx-3 ">
          <div class="card-body">
            <h5 class="card-title">
              Victim name and for victim it will display emergency service
            </h5>
          </div>
        </div>

        <div class="card mt-3 mx-3">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Help me help!</p>
              <footer class="blockquote-footer">
                <cite title="Source Title">victim name</cite>
              </footer>
            </blockquote>
          </div>
        </div>

        <div class="card mt-3 mx-3">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Help is on the way</p>
              <footer class="blockquote-footer">
                <cite title="Source Title">emergency service</cite>
              </footer>
            </blockquote>
          </div>
        </div>

        


      </div>

      <div className="d-flex mt-5 h-50">
            <div className="">
            <textarea />

            <p>Send btn</p>
            </div>
        </div> */}


<div className="row d-flex w-100 mt-5 justify-content-center">
  <div className="col-md-8 col-lg-6 col-xl-4">
    <div className="card" id="chat1" style={{borderRadius: 15}}>
      <div className="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0" style={{borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
        <i className="fas fa-angle-left" />
        <p className="mb-0 fw-bold">Live chat</p>
        <i className="fas fa-times" />
      </div>
      <div className="card-body">
        <div className="d-flex flex-row justify-content-start mb-4">
          <div className="p-3 ms-3" style={{borderRadius: 15, backgroundColor: 'rgba(57, 192, 237,.2)'}}>
            <p className="small mb-0">Help i m in danger</p>
            <p className="small  ">Sent by victim</p>
          </div>

        </div>

        
         <div className="d-flex flex-row justify-content-start mb-4">
          <div className="p-3 ms-3" style={{borderRadius: 15, backgroundColor: 'rgba(57, 192, 237,.2)'}}>
            <p className="small mb-0">Help i m in danger</p>
            <p className="small  "> sent by emergency service</p>
          </div>
        </div>
        
        
        <div className="form-outline">
          <textarea className="form-control" id="textAreaExample" rows={4} defaultValue={""} />
          <label className="form-label" htmlFor="textAreaExample">Type your message</label>
        </div>
        <center>
        <button type="button" class="btn btn-primary">Send Message</button>
        </center>
      </div>
    </div>
  </div>
</div>



    </div>
  );
};

export default ChatScreen;


