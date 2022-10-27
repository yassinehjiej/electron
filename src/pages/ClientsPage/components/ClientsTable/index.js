import { Table } from "antd";
import React from "react";
import DateFormatter from "../../../../utils/DateFormatter";
import Actions from "../Actions";
import './styles.scss';

const getColumns = () => {
    const columns = [
        {
            title: 'Nom et Prenom',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'CIN',
            dataIndex: 'cin',
            key: 'cin',
        },
        {
            title: 'Telephone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Date de naissance',
            dataIndex: 'birthday',
            key: 'birthday',
            render: (date) => (<DateFormatter date={date}/> )
        },
        {
            title: 'Ville',
            dataIndex: 'city',
            key: 'city',
            width: 150
        },
        {
            title: 'Derniere visite',
            dataIndex: 'lastVisit',
            key: 'lastVisit',
            render: (date) => (<DateFormatter date={date}/> )
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'action',
            fixed: 'right',
            width: 90,
            render: () => (
                <Actions />
            )
        },
    ];
    return columns;
};

export default function ClientsTable({data}){
    return(
        <div className="w-full flex justify-center items-center bg-white rounded-2xl p-4 ">
            <Table 
            columns={getColumns()}
            dataSource={data}
            scroll={{x: 1000, y:370}}
            rowKey={(element)=>{ return element._id }}
            pagination={false}
            className="clients-table font-sans"
            />
        </div>
    );
}