import React from "react";
import EditClient from "./components/EditClient";
import Informations from "./components/Informations";

const data = {
    address: "test",
    birthday: "2005-07-30T00:00:00.000Z",
    blood: "a+",
    cin: "Be907799",
    city: "test",
    createdAt: "2022-10-21T14:02:54.575Z",
    gender: "female",
    lastVisit: "2022-10-21T14:02:54.575Z",
    name: "yassine hjiej",
    organizationName: "Capgemini",
    phone: "0643545792",
    updatedAt: "2022-10-25T20:27:35.124Z",
    notes: [{
      _id: '2',
      date: '21/02/2022',
      value: 'ooolalaa'
      },
      {
        _id: '1',
        date: '21/02/2022',
        value: 'ooolalaa'
        }
    ]
}

export default function ClientDetailsPage(){
    return(
    <div className="w-full px-5 pt-5 pb-1 overflow-y-scroll h-[150vh]">
      <div className="flex justify-between">
      <div className="flex justify-start text-sans font-semibold text-3xl mt-3 ml-3 mb-8">
        {data?.gender === 'female' ? 'Madame ' : 'Monsieur '}&nbsp;
         <span className="font-bold">{`${data?.name}`}</span>
      </div>
      <EditClient />
      </div>
      <Informations data={data}/>
    </div>
    );
}