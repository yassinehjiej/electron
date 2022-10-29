import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIcon } from "../../utils";
import AddClient from "./components/AddClient";
import ClientsTable from "./components/ClientsTable";
import "./styles.scss";
import { getAllClients } from "../../service/service";

export default function ClientsPage() {
  const initialState = useSelector(state=>state?.clients);
  initialState.sort(function(a,b){
    return new Date(b.lastVisit) - new Date(a.lastVisit);
  });
  
  const [d, updateD] = useState(initialState);
  const dispatch =  useDispatch()

  useEffect(()=>{
    updateD(initialState)
  }, [initialState])

  const onChange = (value) => {
    const result = [
      initialState.filter(
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

  const refresh = () => {
      getAllClients()
      .then((response) => dispatch({type:"addClients", payload:{clients:response}}))
  }

  const refreshIcon = getIcon("refresh");
  return (
    <div className="w-full p-8">
      <div className="flex justify-start text-sans font-black text-3xl mb-8">
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
          <Button  className="btn-refresh" onClick={refresh}>
            <refreshIcon.icon />
          </Button>
          <AddClient />
        </div>
      </div>
      <ClientsTable data={d ?? initialState} />
    </div>
  );
}
