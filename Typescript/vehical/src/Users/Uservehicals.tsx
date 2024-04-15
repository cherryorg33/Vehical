import React, { useState, useEffect } from 'react';
import AxiosApi, { url } from '../AxiosApi';
import { Link } from 'react-router-dom';
import Booking from './Booking ';

const Uservehicals = () => {
  const [data, setData] = useState([]);
  const [showBooking, setShowBooking] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<object>({});

  const ownerString = localStorage.getItem('customer');
  const owner = ownerString ? JSON.parse(ownerString) : null;

  
    const gettingVehicals = async () => {
      try {
        const response = await AxiosApi.get(`/customer/vehical/${owner._id}`);
       // console.log(response.data, "response");
        setData(response.data.Vehical);
      } catch (error) {
        console.log(error);
      }
    };

    // if (owner) {
    //   gettingVehicals();
    // };

  useEffect(()=>{
    gettingVehicals()
  },[])


  const handleShowBooking = (itemId: object) => {
    setShowBooking(true);
    setSelectedId(itemId);
  };

  return (
    <div className="">
      {!showBooking ? (
        <div className="overflow-y-auto max-h-screen">
          <div className="grid grid-cols-3 p-3 mt-1 min-h-10px max-h-50px">
            {data.map((item: any) => (
              <div className="max-w-2xl mx-auto p-3" key={item._id}>
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg min-h-44 max-h-48 object-cover"
                      src={`${url}/Vehicals/${item?.Image}`}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                        {item.vehicalName}
                      </h5>
                    </a>
                    <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                      {item.vehicalNumber}
                    </p>
                    <div className="flex space-x-3">
                      <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                        Rent: {item.Amount}
                      </p>
                      <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                        <span className="text-xl text-slate-950">withdriver: </span>
                        {item.driverAmount}
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                        vehicalType: {item.vehicalType}
                      </p>
                      <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                        <span className="text-xl text-slate-950">City: </span>
                        {item.city}
                      </p>
                    </div>
                    <div className="flex space-x-6">
                      <button
                        onClick={() => handleShowBooking(item)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=" ml-64 mt-8">
          <Booking productId={selectedId} />
        </div>
      )}
    </div>
  );
};

export default Uservehicals;
