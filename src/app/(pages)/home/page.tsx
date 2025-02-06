/* eslint-disable*/
"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home/livingRoom"); // Điều hướng tự động
  }, []);

  return <div></div>;
};

export default Home;
