

export default function Soulmeeting(){
    return(
        <>
         <div class="justify-center py-0 items-center block text-teal-800 bg-white">
           <strong>
            𝐀𝐃𝐃 𝐒𝐎𝐔𝐋 𝐌𝐄𝐄𝐓𝐈𝐍𝐆
            </strong>
          
        </div>
        <div className="container justify-center ">
        <form class="max-w-lg w-screen h-full flex flex-col justify-center items-center mt-6
         bg-teal-500">
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="md:w-1/2 px-3 mb-2">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
    Select
      </label>
      <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-700 bg-gray-200 border rounded-md shadow-sm outline-none appearance-none focus:border-gray-600">
            <option>Select From Here............</option>
                <option></option>
                <option></option>
                <option></option>
            </select>
        </div>
        </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Enter ID/Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
     
        </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="md:w-1/2 px-3 mb-2 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Member Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
     
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Contact No
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="md:w-1/2 px-3 mb-2 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Address
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
     
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Amount
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
    </div>
  </div>
  
  
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="md:w-1/2 px-3 mb-2 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Date
      </label>
      <input type="date" id="birthday" name="birthday" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-teal-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
     
     </div>
     </div>
     <div class="flex flex-wrap -mx-3 mb-2">
  <button type="button" class="text-white bg-green-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800">Show Data</button>
  <button type="button" class="text-white bg-red-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800">Submit</button>
  </div>
     </form>
     </div>
        </>
    )
}