"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const notify = () => {
    toast.success("Task added sucessfully", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const deleted = () => {
    toast.success("Task deleted sucessfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const [title, settittle] = useState("");
  const [desc, setdesc] = useState("");
  const [date, setdate] = useState("");
  const [maintask, setmaintask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title, desc, date }]);
    console.log(title);
    console.log(desc);
    console.log(date);
    settittle("");
    setdesc("");
    setdate("");
    console.log;
  };

  const delteHandler = (i) => {
    let copytask = [...maintask];
    copytask.splice(i, 1);
    setmaintask(copytask);
  };

  let renderTask = (
    <h2 className="flex items-center justify-center">No tasks available</h2>
  );

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i}>
          <div className="flex flex-nowrap sm:flex-row flex-col items-center justify-between mb-5 p-5 gap-5">
            <div className="flex sm:flex-col justify-between items-center gap-5 flex-row">
              <button className="font-medium bg-green-400 text-black text-xl rounded-3xl p-2 px-8 ease-in duration-300  hover:-translate-y-1 ">
                Task {i + 1}
              </button>
              <h2 className="font-medium bg-white text-black text-xl sm:text-xl rounded-3xl p-2 shadow-xl hover:bg-white">
                {t.date}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between sm:w-2/3 gap-5">
              <p className="text-xl bg-[#ffffff] font-medium shadow-xl sm:w-1/2 rounded-3xl p-4 sm:mr-5 hover:bg-white ease-in duration-300  hover:-translate-y-1 ">
                <span className="font-bold ">Task :</span> {t.title}
              </p>
              <p className="text-xl bg-[#ffffff] text-gray-700 font-medium shadow-xl sm:w-1/2 rounded-3xl p-4 sm:ml-5 hover:bg-white ease-in duration-300 hover:-translate-y-1 sm:gap-6 ">
                <span className="font-bold ">Description :</span> {t.desc}
              </p>
            </div>

            <button
              onClick={() => {
                delteHandler(i);
              }}
              className="bg-red-600 text-white font-medium p-3 rounded-3xl px-6 ease-in duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
            >
              Remove
            </button>
          </div>

          <hr className="w-full bg-gray-950"></hr>
        </li>
      );
    });
  }

  return (
    <>
      <div className="bg-zinc-100">
        <div className="bg-[#13274F] text-white p-5 text-center mb-6 ">
          <h1 className="md:text-4xl text-2xl font-bold bg-[#13274F] tracking-wider">
            Harshit's ToDoList
          </h1>
        </div>

        <div>
          <form onSubmit={submithandler}>
            <div className="flex md:flex-row flex-col items-center justify-center">
              <textarea
                type="text"
                className="text-xl text-black  border-[#13274F] border-0 md:w-2/5 h-60 rounded-3xl m-5 px-4 py-2 text-center bg-[#B9D9EB] placeholder-gray-500 shadow-lg hover:bg-white ease-in duration-300  hover:-translate-y-1 hover:placeholder:py-2 w-5/6 "
                placeholder="Enter the tasks here"
                value={title}
                onChange={(e) => settittle(e.target.value)}
                required
              />

              <textarea
                type="text"
                className="text-xl text-center border-[#13274F] border-0 rounded-3xl m-5 px-4 py-2 md:w-2/5 h-60 placeholder-slate-500 bg-[#B9D9EB] shadow-lg hover:placeholder:ease-in hover:placeholder:py-2
      hover:bg-white ease-in duration-300 hover:-translate-y-1 w-5/6 "
                placeholder="Enter description of task here"
                value={desc}
                onChange={(e) => setdesc(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-center items-center p-2">
              <input
                type="date"
                datetimeformat="d.M.y"
                id="picker"
                className="text-slate-500 font-medium rounded-lg bg-[#B9D9EB] p-2"
                value={date}
                onChange={(e) => setdate(e.target.value)}
                required
              ></input>
            </div>

            <div className="flex justify-center items-center">
              <button
                onClick={notify}
                className="bg-[#1F305E] text-white px-4 py-3 text-2xl rounded-lg m-5 hover:bg-green-500 ease-in duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:placeholder:ease-in "
              >
                Add task
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>

        <div className="p-8 bg-[#B9D9EB] text-black mt-5">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </>
  );
};

export default page;
