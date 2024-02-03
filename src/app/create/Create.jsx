"use client";
import MainLayout from "../components/MainLayout";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GlobalContext from "../context/globalContext";

function Create() {
  const { createProfile } = useContext(GlobalContext);
  const [startDate, setStartDate] = useState(new Date());
  const [postImage, setPostImage] = useState();


  const handleFileChange = async(e) => {
    const file = e.target.files[0];
    setPostImage(file);
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
    createProfile(data);
  };
  return (
    <MainLayout heading={"Create a User"}>
      <form
        onSubmit={handleSubmit}
        className="w-[800px] mx-auto bg-slate-500 rounded-md p-5 flex flex-col gap-5 text-xl"
      >
        <div className="flex gap-5 items-center">
          <label className="font-bold">Name:</label>
          <input
            className="w-full px-5 py-2 rounded-md"
            type="text"
            placeholder="Enter your name"
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
            required
            onChange={handleFileChange}
            accept="image/png, image/jpeg"
            encType="multipart/form-data"
          />
        </div>
        <div className="flex gap-5  items-center">
          <label className="font-bold">Phone number:</label>
          <input
            className="w-full px-5 py-2 rounded-md"
            type="number"
            placeholder="Enter your Phone number"
            required
            name="number"
          />
        </div>
        <div className="flex gap-5 items-center">
          <label className="font-bold">Description:</label>
          <textarea
            className="w-full px-5 py-2 rounded-md"
            placeholder="Enter your Description"
            name="des"
            required
          ></textarea>
        </div>
        <div className="flex gap-5 items-center">
          <label className="font-bold">Birthdate:</label>
          <DatePicker
            selected={startDate}
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
          value="Post"
        />
      </form>
    </MainLayout>
  );
}

export default Create;
