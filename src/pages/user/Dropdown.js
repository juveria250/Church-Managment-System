

export default function Dropdown(){
    return(
        <>
        <div class="relative h-40 mb-4 text-left bg-white">
 
  
  <div class="absolute right-0 z-10 mt-0 mb-2 height-100 w-50 origin-top-right divide-y divide-gray-100 rounded-md bg-blue-200 border border-blue-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
   
     
      <a href="/" class="text-teal-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Home</a>
      <a href="/renewal" class="text-teal-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Add New Member</a>

      <a href="/adddonation" class="text-teal-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Donation</a>
      <a href="/soul-meeting" class="text-teal-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Soul Meeting</a>
    
      <a href="/newmember" class="text-teal-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Add Member</a>
      

  </div>
  
</div>

</>


    )
}