import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { getIcon } from "../../utils";
import AddClient from "./components/AddClient";
import ClientsTable from "./components/ClientsTable";
import "./styles.scss";
import { getAllClients } from "../../service/service";


export default function ClientsPage() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    getAllClients().then((response)=> setData(response))
  }, []);

  const [d, updateD] = useState(data);
  if (!data) return null;
  
  const onChange = (value) => {
    const result = [
      data.filter(
        (element) =>
          element.name.toLowerCase().includes(value.toLowerCase()) ||
          element.cin.toLowerCase().includes(value.toLowerCase()) ||
          element.phone.toLowerCase().includes(value.toLowerCase()) ||
          element.birthday.toLowerCase().includes(value.toLowerCase()) ||
          element.city.toLowerCase().includes(value.toLowerCase()) 
      ),
    ];
    updateD(result[0]);
  };

  function refreshPage() {
    window.location.reload(false);
  }

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
          <Button onClick={refreshPage} className="btn-refresh">
            <refreshIcon.icon />
          </Button>
          <AddClient />
        </div>
      </div>
      <ClientsTable data={d ?? data} />
    </div>
  );
}
