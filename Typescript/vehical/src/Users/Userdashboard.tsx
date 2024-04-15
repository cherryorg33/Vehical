import React, { useState } from 'react'
import Usernav from './Usernav'
import Uservehicals from './Uservehicals'
import ViewBooking from './ViewBooking'
import ViewDriver from './ViewDriver'
import ViewHistory from './ViewHistory'

const Userdashboard = () => {
    const [openUpdate ,setOpenUpdate] = useState(false)
    const [selectedItem , setSelectedItem] = useState('')


 const handleclickItem =(item:any) =>{
    setOpenUpdate(!openUpdate)
    setSelectedItem(item)
 }




  return (
    <div>
        <Usernav/>
        <div className=" flex">
        <div className=" flex justify-items-center">

<div className=" h-screen">
<div className="bg-gray-800 text-white w-64 h-full flex flex-col">
<div className="p-4 border-b border-gray-700">
  <h1 className="text-2xl font-bold">Sidebar</h1>
</div>

<div className="p-4">
  <ul className="space-y-2">
    <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer" >Home</li>
    <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer"  onClick={()=>handleclickItem('vehical')} >View vehicals</li>
    <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer" onClick={()=>handleclickItem('book')} >viewBookig withoutdriver </li>
    <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer" onClick={()=>handleclickItem('driver')} >viewBookigwithdriver</li>
    <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer" onClick={()=>handleclickItem('history')} >viewHistory</li>
    <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">Logout</li>
  </ul>
</div>
</div>
</div>




</div>
    
      
            <div className=" ml-10">

            {openUpdate && selectedItem === 'vehical' && <Uservehicals/>}
       
           </div>
           <div className=" ml-44 mt-9">

            {openUpdate && selectedItem === 'book' && <ViewBooking/>}
           </div>
           {openUpdate && selectedItem === 'driver' && <ViewDriver/>}
           {openUpdate && selectedItem === 'history' && <ViewHistory/>}
           </div>
    </div>
  )
}

export default Userdashboard
