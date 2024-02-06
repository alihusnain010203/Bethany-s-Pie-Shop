import React, { useState } from "react";
import SideBar from "../components/Sidebar/SideBar";

const Contact = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    date: "",
    textmsg: "",
  });

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
if(data.email!=''){
   alert(
      `name:${data.firstname || ""},
      lastname:${data.lastname},
      Email:${data.email || ""},
      Date:${data.date || ""},
      Country:${data.country || ""},
      message${data.textmsg || ""}`
    );
}
  else{
    alert('fill all');
  }
  };

  return (
    <div className="section flex justify-center w-full gap-[10px]">
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start main w-[90%]">
        <div className="side w-[25%]">
          <div className="Sidebar">
            <SideBar />
          </div>
        </div>
        <div className="content flex flex-col gap-10  w-[60%] pb-5">
          <h1 className="text-[#f38f50] font-bold text-xl mt-4">
            Contact Us !
          </h1>
          <div className="border-2 border-[#f38f50] relative">
            <p className="absolute top-[-15px] left-[10px] bg-white">
              Your information
            </p>
            <form className="flex flex-col p-4">
              <label htmlFor="firstname">First name</label>
              <input
                className="input"
                type="text"
                name="firstname"
                id="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <label htmlFor="lastname">Last name</label>
              <input
                className="input"
                type="text"
                name="lastname"
                id="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
              <label htmlFor="country">Country</label>
              <input
                className="input"
                type="text"
                name="country"
                id="country"
                value={data.country}
                onChange={handleChange}
              />
              <label htmlFor="birthDay">Birthday</label>
              <input
                className="input"
                type="date"
                name="date"
                id="birthDay"
                value={data.date}
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                id="email"
                required
                value={data.email}
                onChange={handleChange}
              />
            </form>
          </div>
          <div className="border-2 border-[#f38f50] relative">
            <p className="absolute top-[-15px] left-[10px] bg-white">
              Reason Contacting Us!
            </p>
            <form className="flex flex-col p-4">
              <p>I HAVE A</p>
              <form className="flex flex-col gap-2" action="">
                <div>
                  <input type="radio" name="reason" id="question" />
                  <label htmlFor="question">Question</label>
                </div>
                <div>
                  <input type="radio" name="reason" id="remark" />
                  <label htmlFor="remark">Remark</label>
                </div>
                <div>
                  <input type="radio" name="reason" id="complain" />
                  <label htmlFor="complain">Complain Your Question</label>
                </div>
                <div>
                  <textarea
                    className="input"
                    name="textmsg"
                    id="textmsg"
                    placeholder="Write Your text Here"
                    cols="30"
                    rows="10"
                    style={{ width: "90%" }}
                    value={data.textmsg}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </form>
            </form>
          </div>

          <button
            className="w-[150px] h-[50px] bg-[#f38f50] font-bold text-white"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
