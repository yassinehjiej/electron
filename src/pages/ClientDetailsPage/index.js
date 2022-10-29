import React from "react";
import { useSelector } from "react-redux";
import EditClient from "./components/EditClient";
import Informations from "./components/Informations";

export default function ClientDetailsPage(){
    const cin = useSelector(state => state.cin);
    const clients = useSelector(state => state.clients)

    const data = clients.find(element => element.cin == cin);
    return(
    <div className="w-full px-5 pt-5 pb-1 h-[150vh]">
      <div className="flex justify-between">
      <div className="flex justify-start text-sans font-semibold text-3xl mt-3 ml-3 mb-8">
        {data?.gender === 'female' ? 'Madame ' : 'Monsieur '}&nbsp;
         <span className="font-black">{`${data?.name}`}</span>
      </div>
      <EditClient element={data}/>
      </div>
      <Informations data={data}/>
    </div>
    );
}