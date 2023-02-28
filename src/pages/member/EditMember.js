import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/members/${id}`).then((res) => {
      setName(res.data.name);
      setYear(res.data.year);
      setFmembers(res.data.fmembers);
      setContact(res.data.contact);
      setAlternatecon(res.data.alternatecon);
      setBgroup(res.data.bgroup);
      setProfession(res.data.profession);
      setGender(res.data.gender);
      setJunior(res.data.junior);
      setPOB(res.data.pob);
      setDOB(res.data.dob);
      setAge(res.data.age);
      setMaritalstatus(res.data.maritalstatus);
      setAnniversary(res.data.anniversary);
      setAddress(res.data.address);
      setBaptisim(res.data.baptisim);
      
    });
  }, []);

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

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3000/members/${id}`, data).then(navigate("/newmember"));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">User Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
      <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
         <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="number"
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
          placeholder="No.of Family Members"
        />
        <input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="number"
          placeholder="Contact No"
        />
        <input
          value={alternatecon}
          onChange={(e) => setAlternatecon(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="number"
          placeholder="Alternate Contact No"
        />
        <select
          value={bgroup}
          onChange={(e) => setBgroup(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
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
          placeholder="Profession"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
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
          placeholder="Member/Junior"
        />
        <input
          value={pob}
          onChange={(e) => setPOB(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
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
           id="birthday"
          placeholder="Anniversary-Date"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
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
          onClick={Update}
        >
          Update Details
        </button>
      </form>
    </div>
  );
}

export default MemberAdd;
