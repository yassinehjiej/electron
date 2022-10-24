import { Button, Input } from "antd";
import React, { useState } from "react";
import { getIcon } from "../../utils";
import AddClient from "./components/AddClient";
import ClientsTable from "./components/ClientsTable";
import "./styles.scss";

export const data = [
  {
    id: "1",
    name: "sanaa antari",
    cin: "W427330",
    phone: "0637317786",
    adress:
      "flex justify-start font-sans font-black text-2xl mb-8 flex justify-start font-sans font-black text-2xl mb-8",
    birthday: "1999-11-30T00:00:00.000Z",
    lastVisit: "1999-11-30T00:00:00.000Z",
    city: "Settat",
  },
  {
    id: "2",
    name: "sanaa antari",
    cin: "W427330",
    phone: "0637317786",
    adress: "flex justify-start font-sans8",
    birthday: "1999-11-30T00:00:00.000Z",
    lastVisit: "1999-11-30T00:00:00.000Z",
    city: "Settat",
  },
  {
    id: "3",
    name: "sanaa antari",
    cin: "W427330",
    phone: "0637317786",
    adress: "flex justify-start font-sans8",
    birthday: "1999-11-30T00:00:00.000Z",
    lastVisit: "1999-11-30T00:00:00.000Z",
    city: "Casablanca",
  },
  {
    id: "4",
    name: "sanaa antari",
    cin: "W427330",
    phone: "0637317786",
    adress: "flex justify-start font-sans8",
    birthday: "1999-11-30T00:00:00.000Z",
    lastVisit: "1999-11-30T00:00:00.000Z",
    city: "Casablanca",
  },
  {
    id: "5",
    name: "sanaa antari",
    cin: "W427330",
    phone: "0637317786",
    adress: "flex justify-start font-sans8",
    lastVisit: "1999-11-30T00:00:00.000Z",
    birthday: "1999-11-30T00:00:00.000Z",
    city: "Casablanca",
  },
  {
    id: "6",
    name: "sanaa antari",
    cin: "W427330",
    phone: "0637317786",
    adress: "flex justify-start font-sans8",
    lastVisit: "1999-11-30T00:00:00.000Z",
    birthday: "1999-11-30T00:00:00.000Z",
    city: "Casablanca",
  },
  {
    id: "7",
    name: "sanaa antari",
    cin: "W427330",
    phone: "0637317786",
    adress: "flex justify-start font-sans8",
    lastVisit: "1999-11-30T00:00:00.000Z",
    birthday: "1999-11-30T00:00:00.000Z",
    city: "Casablanca",
  },
  {
    id: "8",
    name: "sanaa antari",
    cin: "W427392",
    phone: "0637317786",
    adress: "flex justify-start font-sans8",
    lastVisit: "1999-11-30T00:00:00.000Z",
    birthday: "1999-11-30T00:00:00.000Z",
    city: "Casablanca",
  },
  {
    id: "9",
    name: "yassine",
    cin: "UA5666",
    gender: "male",
    phone: "0643545792",
    adress: "flex justify-start font-sans8",
    lastVisit: "1999-12-30T00:00:00.000Z",
    birthday: "1999-11-30T00:00:00.000Z",
    city: "Casablanca",
  },
];

export default function ClientsPage() {
  const [d, updateD] = useState(data);

  const onChange = (value) => {
    const result = [
      data.filter(
        (element) =>
          element.name.toLowerCase().includes(value.toLowerCase()) ||
          element.cin.toLowerCase().includes(value.toLowerCase()) ||
          element.phone.toLowerCase().includes(value.toLowerCase()) ||
          element.birthday.toLowerCase().includes(value.toLowerCase()) ||
          element.city.toLowerCase().includes(value.toLowerCase()) ||
          element.lastVisit.toLowerCase().includes(value.toLowerCase())
      ),
    ];
    updateD(result[0]);
  };

  const refreshIcon = getIcon("refresh");
  return (
    <div className="w-full p-8">
      <div className="flex justify-start font-sans font-bold text-2xl mb-8">
        Liste des clients
      </div>
      <div className="flex justify-between">
        <Input
          size="large"
          placeholder=" Search"
          className="search-input"
          onChange={(event) => onChange(event.target.value)}
        />
        <div className="flex">
          <Button className="btn-refresh">
            <refreshIcon.icon />
          </Button>
          <AddClient />
        </div>
      </div>
      <ClientsTable data={d} />
    </div>
  );
}
