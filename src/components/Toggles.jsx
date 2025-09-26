import React, { use, useState } from 'react';
import "./Toggle.css"
import Container from './Container';
import Card from './Card';
import img1 from "../assets/vector1.png"
import { toast } from 'react-toastify';
const Toggles = ({  fetchPromice }) => {
  const data = use(fetchPromice);
  const [Data, SetData] = useState(data);
  const [cartArry, setCartArry] = useState([]); 
const [resolvedArry, setResolvedArry] = useState([]); 
const Progress = Data.filter((data) => data.status === "In-Progress");
const Open = Data.filter((data) => data.status === "Open");
const Resolved = Data.filter((data) => data.status === "Resolved");

const handleClick = (datas) => {
 const exist =  cartArry.filter((item) => item.id === datas.id);
 if (exist.length>0) {
    toast.error("already added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return
 }
  toast.success("In-Progress ", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
   
  });
const currentData = Data.find((e) => e.id === datas.id);

  setCartArry([...cartArry, currentData]);
};


const resolvedData=(info)=>{


if (info.status === "Open" || info.status === "In-Progress") {
  info.status="Resolved"
  
}
  setResolvedArry([...resolvedArry, info]);


   const resData = Data.filter((e) => e.id !== info.id);
   SetData(resData);
   const remainingArray = cartArry.filter((e) => e.id !== info.id);
   setCartArry(remainingArray);
    

}

  return (
    <Container>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-5 mx-3">
        <div
          style={{
            backgroundImage: `linear-gradient(to right, #713AE7, #9E61F2), url(${img1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="card-status  text-white h-[200px] rounded-xl flex"
        >
          <div className="flex items-center justify-start flex-1">
            <img src={img1} alt="" className="h-50 w-50" />
          </div>

          <div className="flex flex-col items-center justify-center flex-1 ">
            <h2 className="text-xl mb-2 text-center">In-Progress</h2>
            <p className="text-3xl font-semibold">{cartArry.length}</p>
          </div>

          <div className="flex items-center justify-end flex-1 rotate-y-180">
            <img src={img1} alt="" className="h-50 w-50" />
          </div>
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(to right, #4CC869, #00827A), url(${img1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="card-status  text-white h-[200px] rounded-xl flex"
        >
          <div className="flex items-center justify-start flex-1">
            <img src={img1} alt="" className="h-50 w-50" />
          </div>

          <div className="flex flex-col items-center justify-center flex-1 ">
            <h2 className="text-xl mb-2 text-center">Resolved</h2>
            <p className="text-3xl font-semibold">{resolvedArry.length}</p>
          </div>

          <div className="flex items-center justify-end flex-1 rotate-y-180">
            <img src={img1} alt="" className="h-50 w-50" />
          </div>
        </div>
      </div>

      <div className="md:flex   flex-col md:flex-row gap-5 mb-5">
        <div className="md:w-[75%] w-full">
          <h1 className="text-2xl font-semibold my-5 ">Customer Tickets</h1>
          <div className=" grid md:grid-cols-2 grid-cols-1  gap-5 mx-auto">
            {Data.length === 0 && (
              <h3 className="text-center font-bold"> No data</h3>
            )}
            {Data.map((date) => (
              <Card key={date.id} date={date} handleClick={handleClick} />
            ))}
          </div>
        </div>

        <div className="md:w-[25%] w-full ">
          <h1 className="text-2xl font-semibold my-5">Task Status</h1>
          <div>
            <h6 className="text-[12px]">
              {cartArry.length === 0 && "Select a ticket to add to Task Status"}
            </h6>
            {cartArry.map((e) => (
              <div className="w-full shadow-lg p-4 my-3">
                <h4 className="font-semibold  mb-3">{e.title}</h4>
                <button
                  onClick={() => resolvedData(e)}
                  className="btn w-full bg-[#02A53B] border-0 text-white"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>

          <h1 className="text-2xl font-semibold my-5">Resolved Status</h1>
          <div>{Resolved.data}</div>
          <div>
            <h6 className="text-[12px]">
              {resolvedArry.length === 0 && "No resolved tasks yet."}
            </h6>
            {resolvedArry.map((e) => (
              <div className="shadow-lg p-4 my-3 bg-[#E0E7FF]">
                <h4 className="font-semibold  mb-3">{e.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Toggles;