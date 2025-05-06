import React, { useEffect, useState } from 'react'
import "../styles/Profile.css"
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { useAuth } from '../context/auth'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [auth, setAuth] = useAuth();
  const [uid, setUid] = useState()
  const [uname, setuname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [address, setaddress] = useState("");
  const [pinCode, setpinCode] = useState("");
  const [emergencyMail, setemergencyMail] = useState("");
  const [emergencyNo, setemergencyNo] = useState("");
  const [extraEmail1, setextraEmail1] = useState("");
  const [extraEmail2, setextraEmail2] = useState("");
  const [extraPhone1, setextraPhone1] = useState("");
  const [extraPhone2, setextraPhone2] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    const { _id, uname, email, phoneNo, address, pinCode, emergencyMail, emergencyNo, extraEmail1, extraEmail2, extraPhone1, extraPhone2 } = auth?.user;
    setUid(_id)
    setuname(uname);
    setEmail(email);
    setphoneNo(phoneNo);
    setaddress(address);
    setpinCode(pinCode);
    setemergencyMail(emergencyMail);
    setemergencyNo(emergencyNo);
    setextraEmail1(extraEmail1);
    setextraEmail2(extraEmail2);
    setextraPhone1(extraPhone1);
    setextraPhone2(extraPhone2);
    window.scrollTo(0, 0)
  }, [auth?.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("https://womensecbackend.onrender.com/api/v1/users/update", {
        uid,
        uname,
        email,
        phoneNo,
        address,
        pinCode,
        emergencyMail,
        emergencyNo,
        extraEmail1,
        extraEmail2,
        extraPhone1,
        extraPhone2
      });
      if (data?.error) {
        toast.error(data?.error);
      } else {
        // setAuth({ ...auth, user: data?.updatedUser });
        // let ls = localStorage.getItem("auth");
        // ls = JSON.parse(ls);
        // ls.user = data.updatedUser;
        // localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
        navigate('/login')
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container marginStyle">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                    <div className="mt-3">
                      <h4>{auth?.user?.uname}</h4>
                      <p className="text-muted font-size-sm">Pincode : {auth?.user?.pinCode}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input value={uname} onChange={(e) => setuname(e.target.value)} type="email" id="form3Example1c" className="form-control" required />
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example1c" className="form-control" required />
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Emergency Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary mb-2">
                      <input value={emergencyMail} onChange={(e) => setemergencyMail(e.target.value)} type="email" id="form3Example1c" className="form-control" required />
                    </div>
                    <div className="col-sm-3">
                      <h6 className="mb-0">Emergency Email 1</h6>
                    </div>
                    <div className="col-sm-9 text-secondary mb-2">
                      <input value={extraEmail1} onChange={(e) => setextraEmail1(e.target.value)} type="email" id="form3Example1c" className="form-control" required />
                    </div>
                    <div className="col-sm-3">
                      <h6 className="mb-0">Emergency Email 2</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input value={extraEmail2} onChange={(e) => setextraEmail2(e.target.value)} type="email" id="form3Example1c" className="form-control" required />
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary mb-2">
                      <input value={phoneNo} onChange={(e) => setphoneNo(e.target.value)} type="email" id="form3Example1c" className="form-control" required />
                    </div>
                    <hr />
                    <div className="col-sm-3">
                      <h6 className="mb-0">Emergency Phone 1</h6>
                    </div>
                    <div className="col-sm-9 text-secondary mb-2">
                      <input value={emergencyNo} onChange={(e) => setemergencyNo(e.target.value)} type="email" id="form3Example1c" className="form-control" required />
                    </div>
                    <div className="col-sm-3">
                      <h6 className="mb-0">Emergency Phone 2</h6>
                    </div>
                    <div className="col-sm-9 text-secondary mb-2">
                      <input value={extraPhone1} onChange={(e) => setextraPhone1(e.target.value)} type="email" id="form3Example1c" className="form-control" required />
                    </div>
                    <div className="col-sm-3">
                      <h6 className="mb-0">Emergency Phone 3</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input value={extraPhone2} onChange={(e) => setextraPhone2(e.target.value)} type="email" id="form3Example1c" className="form-control" required />
                    </div>
                  </div>


                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary mb-2">
                      <input value={address} onChange={(e) => setaddress(e.target.value)} type="email" id="form3Example1c" className="form-control" required />
                    </div>
                    <div className="col-sm-3">
                      <h6 className="mb-0">Pincode</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input value={pinCode} onChange={(e) => setpinCode(e.target.value)} type="email" id="form3Example1c" className="form-control" required />
                    </div>

                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <button onClick={handleSubmit} className="btn btn-outline-dark ">Update</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gutters-sm">
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Profile