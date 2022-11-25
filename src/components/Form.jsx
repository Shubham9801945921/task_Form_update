import React, { useState } from "react";
import axios from "axios";

function Form() {
    const [props, setUserData] = useState({
        data: {
            id: '',
            image: "",
            phone: '',
            securityQuestions: [],
            user: {
                email: '',
                gender: '',
                id: '',
                interest: '',
                is_Bloggers: '',
                is_business_owner: '',
                nick_name: ''
            }
        }
    });

    const onUpdateClick = (e) => {
        e.preventDefault();
        const url = "http://3.6.160.235:8000/update_profile/";
        axios
          .get(url, {
            headers: {
              Authorization: "TOKEN 06728ba959bbabde5079e6bbaea7c807f28706dc",
            },
          })
          .then((response) => {
            setUserData({data: response.data});
          })
          .catch((e) => {
            console.log(`Error: `, e.message);
          });
    }

    const handleChange = (e) => {
        console.log(e);
    }

  return (
    <form>
      <div style={{ display: "flex" }}>
        <div
          style={{ backgroundColor: "#EAEDED", width: "15vw", height: "132vh" }}
        >
          <p style={{ textAlign: "center", width: "15vw", fontWeight: "500" }}>
            Settings
          </p>
          <div style={{ display: "grid" }}>
            <button
              style={{
                border: "none",
                backgroundColor: "#D0D0D0",
                height: "38px",
                width: "15vw",
              }}
            >
              Your Account
            </button>
            <br />
            <button
              style={{
                border: "none",
                height: "38px",
                backgroundColor: "#EAEDED",
                width: "15vw",
              }}
            >
              Link 2
            </button>
            <br />
            <button
              style={{
                border: "none",
                height: "38px",
                backgroundColor: "#EAEDED",
                width: "15vw",
              }}
            >
              Link 3
            </button>
            <br />
            <button
              style={{
                border: "none",
                height: "38px",
                backgroundColor: "#EAEDED",
                width: "15vw",
              }}
            >
              Link 4
            </button>
            <br />
          </div>
        </div>

        <div style={{ width: "85vw", height: "132vh" }}>
          <div>
            <p style={{ marginLeft: "24px", fontWeight: "500" }}>
              Your Account
            </p>
            <div>
              <label style={{ marginLeft: "24px" }}>Photo</label>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "#EAEDED",
                    marginLeft: "24px",
                  }}
                >
                  <img src={props.data.image} alt="" />
                </div>
                <button
                  style={{
                    border: "none",
                    color: "white",
                    backgroundColor: "#2b98f4",
                    width: "11%",
                    height: "33px",
                    marginLeft: "27px",
                    marginTop: "9px",
                  }}
                >
                  Change
                </button>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: "24px" }}>
            <div style={{ display: "grid" }}>
              <label>Full Name</label>
              <input style={{ width: "33%", height: "29px" }} value={props.data.user.nick_name} onChange={(e) => { handleChange(e) }} />
            </div>
            <br />
            <div style={{ display: "grid" }}>
              <label>Email Address</label>
              <input style={{ width: "33%", height: "29px" }} value={props.data.user.email} onChange={(e) => { handleChange(e) }} />
            </div>
            <br />
            <div style={{ display: "grid" }}>
              <label>Password</label>
              <div>
                <input style={{ width: "33%", height: "29px" }} />
                <button
                  style={{
                    border: "none",
                    color: "white",
                    backgroundColor: "#2b98f4",
                    width: "11%",
                    height: "33px",
                    marginLeft: "27px",
                    marginTop: "9px",
                  }}
                >
                  Change
                </button>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: "24px" }}>
            <label>Gender</label>
            <div style={{ display: "flex" }}>
              <div>
                    <input type="radio" name="gender" value="M" checked={ props.data.user.gender } onChange={(e) => { handleChange(e) }} />
                <label>Male</label>
              </div>
              <div style={{ marginLeft: "56px" }}>
                <input type="radio" name="gender" value="F" checked={ props.data.user.gender } onChange={(e) => { handleChange(e) }} />
                <label>Female</label>
              </div>
              <div style={{ marginLeft: "56px" }}>
                <input type="radio" name="gender" value="O" checked={ props.data.user.gender === 'O' } onChange={(e) => { handleChange(e) }} />
                <label>Other</label>
              </div>
            </div>
          </div>
          <br />
          <div style={{ marginLeft: "24px" }}>
            <label>Role</label>
            <div style={{ display: "flex" }}>
              <div>
                <input type={"radio"} checked={props.data.user.is_Bloggers} onChange={(e) => { handleChange(e) }} />
                <label>Content Creator</label>
              </div>
              <div style={{ marginLeft: "56px" }}>
                <input type={"radio"} checked={props.data.user.is_business_owner} onChange={(e) => { handleChange(e) }} />
                <label>Business Owner</label>
              </div>
              <div style={{ marginLeft: "56px" }}>
                <input type={"radio"} />
                <label>End User</label>
              </div>
            </div>
          </div>
          <br />
          <div style={{ marginLeft: "24px" }}>
            <div style={{ display: "grid" }}>
              <label>Field of interest</label>
              <input style={{ width: "33%", height: "29px" }} value={props.data.user.interest} onChange={(e) => { handleChange(e) }} />
            </div>
            <br />
            <div style={{ display: "grid" }}>
              <label>Recovery Email address</label>
              <input style={{ width: "33%", height: "29px" }} value={props.data.user.email} onChange={(e) => { handleChange(e) }} />
            </div>
            <br />
            <div style={{ display: "grid" }}>
              <label>Contact Number</label>
              <div>
                <input style={{ width: "33%", height: "29px" }} value={props.data.phone ? props.data.phone : ''} onChange={(e) => { handleChange(e) }} />
              </div>
            </div>
          </div>
          <hr />

          <div style={{ marginLeft: "24px" }}>
            <p>Security Question</p>
            <div style={{ display: "flex" }}>
              <div style={{ display: "grid" }}>
                <label>Question 1</label>
                <input style={{ height: "29px", width: "177%" }} />
              </div>

              <div style={{ display: "grid", marginLeft: "207px" }}>
                <label>Asnwer 1</label>
                <input style={{ height: "29px", width: "177%" }} />
              </div>
            </div>
            <br />
            <div style={{ display: "flex" }}>
              <div style={{ display: "grid" }}>
                <label>Question 2</label>
                <input style={{ height: "29px", width: "177%" }} />
              </div>

              <div style={{ display: "grid", marginLeft: "207px" }}>
                <label>Asnwer 2</label>
                <input style={{ height: "29px", width: "177%" }} />
              </div>
            </div>
          </div>
          <div style={{ float: "right" }}>
            <button
              style={{ marginRight: "29px", width: "77px", height: "32px" }}
            >
              Cancel
            </button>
            <button
              style={{
                marginRight: "29px",
                width: "77px",
                height: "32px",
                color: "white",
                backgroundColor: "#2b98f4",
                border: "none",
              }}
              type="button"
              onClick={(e) => { onUpdateClick(e) }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;