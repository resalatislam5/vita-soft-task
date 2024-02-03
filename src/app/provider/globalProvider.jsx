"use client";
import { useEffect, useState } from "react";
import GlobalContext from "../context/globalContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function GlobalProvider({ children }) {
  const [user, setUser] = useState([]);
const { replace } = useRouter();
  const handleFetchDataList = async () => {
    const res = await fetch(
      "https://tasks.vitasoftsolutions.com/userdata/?format=json"
    );
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    handleFetchDataList();
  }, []);

  const createProfile = async (value) => {
    try {
      let res = await fetch("https://tasks.vitasoftsolutions.com/userdata/", {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      if(data){
        toast.success("Done");
        replace('/')
      }
    } catch (e) {
      console.log("Something was wrong");
    }
  };

  const updateProfile = async (value) => {
    try {
      let res = await fetch("https://tasks.vitasoftsolutions.com/userdata/", {
        method: "Put",
        body: JSON.stringify(value),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      if (data) {
        toast.success("Done");
        rep
      }
    } catch (e) {
      console.log("Something was wrong");
    }
  };

  const fetchSingleData = async (id) => {
    const res = await fetch(
      ` https://tasks.vitasoftsolutions.com/userdata/${id}`
    );
    const data = await res.json();
    return data;
  };

  const value = {
    user,
    createProfile,
    fetchSingleData,
    updateProfile,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export default GlobalProvider;
