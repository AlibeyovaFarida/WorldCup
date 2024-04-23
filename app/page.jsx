'use client'
import Burger from "@/components/burger";
import Header from "@/components/header";
import Live from "@/components/live";
import Results from "@/components/results";
import Tabs from "@/components/tabs";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("live")
  return (
    <div className="w-[100%] h-[100%] bg-[#080915] overflow-x-hidden flex flex-col">
      <Burger />
      <Header />
      <Tabs setTab={setTab} tab={tab}/>
      {tab==="live" && <Live/>}
      {tab==="results" && <Results/>}
    </div>
  );
}
