import { Radio } from "@material-tailwind/react";


export default function Renewal(){
    return(
        <>
        <div class="justify-center py-0 items-center block text-teal-800 bg-white">
            <h1>𝐀𝐝𝐝 𝐍𝐞𝐰 𝐌𝐞𝐦𝐛𝐞𝐫
            
            </h1>
        </div>
        <div className="container justify-center ">
        <form class="max-w-lg w-screen h-full flex flex-col justify-center items-center mt-6
         bg-teal-500">
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="md:w-1/2 px-3 mb-2">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name"/>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Year
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4" id="grid-last-name" type="number" placeholder="Year"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="md:w-1/2 px-3 mb-2 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        No.of Family Members
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="No.of members"/>
     
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Contact No
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="Number"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="md:w-1/2 px-3 mb-2 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      Contact No
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="alternate number"/>
     
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Blood Group
      </label>
      <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-700 bg-gray-200 border rounded-md shadow-sm outline-none appearance-none focus:border-gray-600 placeholder:SELECT YOUR BLOOD GROUP">
                <option>Select your blood group.....</option>
                <option> A+</option>
                <option>B+</option>
                <option>AB+</option>
                <option>O+</option>
                <option>A-</option>
                <option>B-</option>
                <option>AB-</option>
                <option>O-</option>
            </select>
        </div>
        </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="md:w-1/2 px-3 mb-2 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Profession
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Profession"/>
     
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Gender
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Gender"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="md:w-1/2 px-3 mb-2 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Member/Junior
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Member/Junior"/>
     
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Place-of-Birth
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=" Place-of-Birth"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="md:w-1/2 px-7 mb-2 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Date-of-Birth
      </label>
      <input type="date" id="birthday" name="birthday" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
     
    </div>
    <div class="md:w-1/2 px-7">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Age
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Age"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="md:w-1/2 px-6 mb-2 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Marital Status
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Marital Status"/>
     
    </div>
    <div class="md:w-1/2 px-7">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Anniversary-Date
      </label>
<input type="date" id="birthday" name="birthday" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
     </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2 ">
    <div class="md:w-1/2 px-3 mb-2 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Address
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Address"/>
     
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Baptisim Of Holy Sprit
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Baptisim Of Holy Sprit"/>
    </div>
  </div>
  
  <div class="flex flex-wrap -mx-3 mb-2">
  <button type="button" class="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800">Submit</button>
  
    

  </div>
</form>
</div>
        </>
    )
}