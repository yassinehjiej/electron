import { Button, Input } from "antd";
import React from "react";
import { getIcon } from "../../utils";
import AddClient from "./components/AddClient";
import ClientsTable from "./components/ClientsTable";
import './styles.scss';

const data = [{
    id: '1',
    name: 'sanaa antari',
    cin: 'W427330',
    phone: '0637317786',
    adress: 'flex justify-start font-sans font-black text-2xl mb-8 flex justify-start font-sans font-black text-2xl mb-8',
    birthday: '28/01/1999',
    city: 'Settat',
},
{
    id: '2',
    name: 'sanaa antari',
    cin: 'W427330',
    phone: '0637317786',
    adress: 'flex justify-start font-sans8',
    birthday: '28/01/1999',
    city: 'Settat',
},
{
    id: '3',
    name: 'sanaa antari',
    cin: 'W427330',
    phone: '0637317786',
    adress: 'flex justify-start font-sans8',
    birthday: '28/01/1999',
    city: 'Casablanca',
},
{
    id: '4',
    name: 'sanaa antari',
    cin: 'W427330',
    phone: '0637317786',
    adress: 'flex justify-start font-sans8',
    birthday: '28/01/1999',
    city: 'Casablanca',
},
{
    id: '5',
    name: 'sanaa antari',
    cin: 'W427330',
    phone: '0637317786',
    adress: 'flex justify-start font-sans8',
    birthday: '28/01/1999',
    city: 'Casablanca',
},
{
    id: '6',
    name: 'sanaa antari',
    cin: 'W427330',
    phone: '0637317786',
    adress: 'flex justify-start font-sans8',
    birthday: '28/01/1999',
    city: 'Casablanca',
},
{
    id: '7',
    name: 'sanaa antari',
    cin: 'W427330',
    phone: '0637317786',
    adress: 'flex justify-start font-sans8',
    birthday: '28/01/1999',
    city: 'Casablanca',
},
{
    id: '8',
    name: 'sanaa antari',
    cin: 'W427330',
    phone: '0637317786',
    adress: 'flex justify-start font-sans8',
    birthday: '28/01/1999',
    city: 'Casablanca',
},
{
    id: '9',
    name: 'sanaa antari',
    cin: 'W427330',
    phone: '0637317786',
    adress: 'flex justify-start font-sans8',
    birthday: '28/01/1999',
    city: 'Casablanca',
},
];

export default function ClientsPage() {
    const refreshIcon = getIcon('refresh');
    return(
        <div className="w-full p-8"> 
            <div className="flex justify-start font-sans font-bold text-2xl mb-8">
                Liste des clients
            </div>
            <div className="flex justify-between">
                <Input
                size="large"
                placeholder=' Search'
                className="search-input"
                />
                <div className="flex">
                    <Button className="btn-refresh">
                        <refreshIcon.icon />
                    </Button>
                    <AddClient />
                </div>
            </div>
           <ClientsTable data={data} />
        </div>
    );
}