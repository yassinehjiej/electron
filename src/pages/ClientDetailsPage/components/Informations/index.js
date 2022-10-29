import React, { useState } from "react";
import DateFormatter from "../../../../utils/DateFormatter";
import male from "../../../../assets/male.png";
import female from "../../../../assets/female.png";
import ManageNotes from "../ManageNotes";

const icons = {
    male,
    female
};

const clientInformationEntries = [
    {
      name: 'name',
      label: 'Nom',
    },
    {
      name: 'gender',
      label: 'Sex',
    },
    {
      name: 'cin',
      label: 'CIN',
    },
    {
      name: 'phone',
      label: 'Telephone'
    },
    {
      name: 'address',
      label: 'Adresse'
    },
    {
      name: 'city',
      label: 'Ville'
    },
    {
      name: 'birthday',
      label: 'Date de naissance'
    },
    {
    name: 'blood',
    label: 'Type sanguin'
    },
    {
    name: 'lastVisit',
    label: 'Derniere visite'
    },
  ];

function Label({ data }) {
    return (
      <dt className="text-sans text-lg leading-6 flex items-center text-gray-900 mb-2 font-bold">
        {data}
      </dt>
    );
  }

  function Info({ data }) {
    return (
      <p className="mt-1 mr-2 font-normal font-sans text-base leading-6 flex items-center text-gray-500">
        {data}
      </p>
    );
  }
  function ShowInfo({ data, label }) {
    switch (label) {
      case 'birthday':
      case 'updatedAt':
      case 'lastVisit':
        return <DateFormatter date={data[label]} className='font-normal font-sans text-base  flex items-center text-gray-500'/>;
      default:
        return <Info data={data[label]} />;
    }
  }

export default function Informations({data}){
    return(
        <>
        <div className="pt-10 pb-12 w-full flex justify-center items-center bg-white rounded-2xl pl-12 ">
            <div className="pl-2.5 w-full">
                <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="row-span-1 md:row-span-4 mt-5" >
                        <img
                            className="bg-light-green h-[164px]"
                            src={icons[data?.gender]}
                            alt="Logo" />
                    </div>
                    {clientInformationEntries.map((el) => 
                        <div key={el.label} className="col-span-1">
                            <Label data={el.label}  key={data.cin}/>
                            <ShowInfo data={data} label={el.name} />
                        </div>
                    )}
                </dl>
            </div>
        </div>
        <ManageNotes notes={data.description} data={data}/>
        </>

    );
}