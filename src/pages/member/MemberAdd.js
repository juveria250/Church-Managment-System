import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MemberAdd() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [fmembers, setFmembers] = useState("");
  const [contact, setContact] = useState("");
  const [alternatecon, setAlternatecon] = useState("");
  const [bgroup, setBgroup] = useState("");
  const [profession, setProfession] = useState("");
  const [gender, setGender] = useState("");
  const [junior, setJunior] = useState("");
  const [pob, setPOB] = useState("");
  const [dob, setDOB] = useState("");
  const [age, setAge] = useState("");
  const [maritalstatus, setMaritalstatus] = useState("");
  const [anniversary, setAnniversary] = useState("");
  const [address, setAddress] = useState("");
  const [baptisim, setBaptisim] = useState("");

  const navigate = useNavigate();
  const data = {
    name: name,
    year: year,
    fmembers: fmembers,
    contact: contact,
    alternatecon: alternatecon,
    bgroup: bgroup,
    profession: profession,
    gender: gender,
    junior: junior,
    pob: pob,
    dob: dob,
    age: age,
    maritalstatus: maritalstatus,
    anniversary: anniversary,
    address: address,
    baptisim: baptisim,
   
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/members", data).then(navigate("/newmember"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Add Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
      <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          id="name"
          placeholder="Enter your name"
        />
        
         <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="number"
          id="year"
          placeholder="Year">
            <option>Select Year</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>


          </select>
        
        <input
          value={fmembers}
          onChange={(e) => setFmembers(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="number"
          id="fmember"
          placeholder="No.of Family Members"
        />
        <input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="number"
          id="contact"
          placeholder="Contact No"
        />
        <input
          value={alternatecon}
          onChange={(e) => setAlternatecon(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="number"
          id="alternatecon"
          placeholder="Alternate Contact No"
        />
        <select
          value={bgroup}
          onChange={(e) => setBgroup(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          id="bgroup"
          placeholder="Blood Group">
            <option>Select your blood group</option>
                <option> A+</option>
                <option>B+</option>
                <option>AB+</option>
                <option>O+</option>
                <option>A-</option>
                <option>B-</option>
                <option>AB-</option>
                <option>O-</option>
          </select>
        
        <input
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          id="profession"
          placeholder="Profession"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          id="gender"
          placeholder="Gender">
            <option>Select your Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                
          </select>
        <input
          value={junior}
          onChange={(e) => setJunior(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          id="junior"
          placeholder="Member/Junior"
        />
        <input
          value={pob}
          onChange={(e) => setPOB(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          id="pob"
          placeholder="Place-of-Birth"
        />
        <input
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="date"
           id="birthday"
          placeholder="Date of Birth"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          id="age"
          placeholder="Age"/>
           
        
          <select
          value={maritalstatus}
          onChange={(e) => setMaritalstatus(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="maritalstatus"
        >
           <option>Select your marital status</option>
                <option>Married</option>
                <option>Unmarried</option>
                
          </select>
        <input
          value={anniversary}
          onChange={(e) => setAnniversary(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="date"
           id="anniversary"
          placeholder="Anniversary-Date"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          id="address"
          placeholder="Address"
        />
        <select
          value={baptisim}
          onChange={(e) => setBaptisim(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Baptisim Of Holy Sprit">
            <option>Select your Baptisim Of Holy Sprit </option>
                <option>sacramental baptism </option>
                <option> baptism of desire</option>
                <option>baptism of blood </option>

          </select>
      
        
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          Add Details
        </button>
      </form>
    </div>
  );
}

export default MemberAdd;
