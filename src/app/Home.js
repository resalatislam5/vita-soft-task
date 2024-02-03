"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import notFound from "./ass/not-found.png";
import Link from "next/link";
import MainLayout from "./components/MainLayout";
import GlobalContext from "./context/globalContext";

function HomeS() {
    const { user } = useContext(GlobalContext);


  return (
    <MainLayout heading="User List Page">
      <div className="flex flex-wrap justify-center gap-5">
        {user.map((e) => (
          <div className="bg-gray-400 w-96 p-5 flex flex-col gap-2" key={e.id}>
            {e.profile_picture ? (
              <Image width={300} height={200} src={e.profile_picture} alt="" />
            ) : (
              <Image width={300} height={300} src={notFound} alt="" />
            )}
            <p>
              <span className="font-bold">Name: </span>
              {e.name}
            </p>
            <p>
              <span className="font-bold">Phone Number: </span>
              {e.phone_number}
            </p>
            <p>
              <span className="font-bold">Description: </span>
              {e.description}
            </p>
            <p>
              <span className="font-bold">Birthdate: </span>
              {e.birthdate}
            </p>
            <Link
              className="bg-red-500 w-16 py-3 font-bold text-xl rounded-md flex justify-center"
              href={`edit/${e.id}`}
            >
              Edit
            </Link>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export default HomeS;
