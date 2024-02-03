"use client";

import MainLayout from "@/app/components/MainLayout";
import GlobalContext from "@/app/context/globalContext";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Edit({ id }) {
  console.log(id);
  const [editData, setEditdata] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [file, setFile] = useState();
  const { updateProfile, fetchSingleData } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      const edit = await fetchSingleData(id);
      setEditdata(edit);
    })();
  }, []);
  

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(file);
    }
  };
  const month = startDate.getUTCMonth() + 1; // months from 1-12
  const day = startDate.getUTCDate();
  const year = startDate.getUTCFullYear();
  const newDate = year + "-" + month + "-" + day;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const number = from.number.value;
    const des = from.des.value;

    const data = {
      name,
      profile_picture: null,
      phone_number: number,
      description: des,
      birthdate: newDate,
      active_status: false,
    };
    console.log(data);
    updateProfile(data);
  };
  return (
    <div>
      <MainLayout heading={"Edit Your Data"}>
        <form
          onSubmit={handleSubmit}
          className="w-[800px] mx-auto bg-slate-500 rounded-md p-5 flex flex-col gap-5 text-xl"
        >
          <div className="flex gap-5 items-center">
            <label className="font-bold">Name:</label>
            <input
              className="w-full px-5 py-2 rounded-md"
              type="text"
              placeholder={editData.name}
              required
              name="name"
            />
          </div>
          <div className="flex gap-5  items-center">
            <label className="font-bold">Image:</label>
            <input
              className="w-full px-5 py-2 rounded-md"
              type="file"
              placeholder="Enter your name"
              onChange={handleFileChange}
              accept="image/png, image/jpeg"
            />
          </div>
          <div className="flex gap-5  items-center">
            <label className="font-bold">Phone number:</label>
            <input
              className="w-full px-5 py-2 rounded-md"
              type="text"
              placeholder={editData.phone_number}
              required
              name="number"
            />
          </div>
          <div className="flex gap-5 items-center">
            <label className="font-bold">Description:</label>
            <textarea
              className="w-full px-5 py-2 rounded-md"
              placeholder={editData.description}
              name="des"
              required
            ></textarea>
          </div>
          <div className="flex gap-5 items-center">
            <label className="font-bold">Birthdate:</label>
            <DatePicker
              selected={editData.birthdate}
              onChange={(date) => setStartDate(date)}
              className="py-3 px-5 rounded-md"
              dateFormat="yyyy/MM/dd"
            />
          </div>
          <div className="flex gap-5 items-center">
            <label className="font-bold">Active status:</label>
            <input type="checkbox" name="check" id="" />
          </div>
          <input
            className="bg-gray-400 py-3 rounded-lg cursor-pointer"
            type="submit"
            value="Update"
          />
        </form>
      </MainLayout>
    </div>
  );
}

export default Edit;
