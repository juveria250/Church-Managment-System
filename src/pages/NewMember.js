import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewMember() {
  const [members, setMembers] = useState([]);

  function loadMembers() {
    axios.get("http://localhost:3000/members").then((res) => {
      setMembers(res.data.reverse());
    });
  }

  useEffect(() => {
    loadMembers();
  }, []);

  function deleteMember(id) {
    axios.delete(`http://localhost:3000/members/${id}`).then(loadMembers());
  }

  return (
    <>
      <div className="w-[100vw] h-full justify-center items-center flex flex-col text-teal-800 px-20 py-4">
        <h1 className="text-3xl font-bold">Add New Member</h1>
        </div>
        <div className="py-5 justify-end items-end">
           <Link to={"/add-member"} className="hover:bg-gray-600 
            hover:border-2 hover:border-gray hover:text-teal-200 hover:shadow-md rounded-lg bg-teal-600 font-bold 
            text-white gap-7  py-4  px-2">Add Users</Link>
            
     </div>

        <div className="w-[100vw] h-full justify-center items-center flex flex-col py-4">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 items-center lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center bg-teal-600">
                  <thead className="border-b bg-teal-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Contact
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-black bg-teal-600 border-b-2">
                    {members.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b-2 border-black"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                          {index + 1}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.name}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.contact}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.address}
                        </td>
                        <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                          <Link
                            to={`/members/${data.id}`}
                            className="bg-teal-600 text-white px-6 py-2 rounded-lg"
                          >
                            View
                          </Link>
                          <Link
                            to={`/edit-member/${data.id}`}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                          >
                            Edit
                          </Link>
                          <Link
                            onClick={()=>deleteMember(data.id)}
                            to={"#"}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewMember;
