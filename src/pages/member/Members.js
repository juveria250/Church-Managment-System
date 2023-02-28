import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Members() {
  const { id } = useParams();

  const [member, setMember] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/members/${id}`).then((res) => {
      setMember(res.data);
    });
  }, []);

  console.log(member);
  return (
    <>
      <div className="h-full w-full flex flex-col mt-10 justify-center items-center">
        <Link
          to={`/newmember`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-2"
        >
          Back
        </Link>
        {member && (
          <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Name
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Year
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Family Members
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Contact No
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Contact No
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Blood Group
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Profession
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Gender
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Member/Junior
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Place-of-Birth
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Date-of-Birth
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Age
              </h2>
             
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Marital Status
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Anniversary-Date
                </h2>
                <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Address
                </h2>
                <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Baptisim
                </h2>
              
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.name}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.year}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.fmembers}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.contact}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.alternatecon}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.bgroup}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.profession}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.gender}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.junior}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.pob}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.dob}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.age}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.maritalstatus}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.anniversary}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.address}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {member.baptisim}
              </h2>
              
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Members;
