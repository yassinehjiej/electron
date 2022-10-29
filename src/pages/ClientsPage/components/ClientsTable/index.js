import { Table } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DateFormatter from "../../../../utils/DateFormatter";
import Actions from "../Actions";
import './styles.scss';



export default function ClientsTable({data}){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getColumns = () => {
        const columns = [
            {
                title: 'Nom et Prenom',
                dataIndex: 'name',
                key: 'name',
                render : (record, data) => (
                    <div onClick={()=> {dispatch({type:"addCin", payload:{cin:data.cin}}); 
                    navigate('/details');}}>{record}</div>
                )
            },
            {
                title: 'CIN',
                dataIndex: 'cin',
                key: 'cin',
                render : (record, data) => (
                    <div onClick={()=> {dispatch({type:"addCin", payload:{cin:data.cin}}); navigate('/details', {state:data});}}>{record}</div>
                )
            },
            {
                title: 'Telephone',
                dataIndex: 'phone',
                key: 'phone',
                render : (record, data) => (
                    <div onClick={()=> {dispatch({type:"addCin", payload:{cin:data.cin}}); navigate('/details', {state:data});}}>{record}</div>
                )
            },
            {
                title: 'Date de naissance',
                dataIndex: 'birthday',
                key: 'birthday',
                render: (date, data) => (<div onClick={()=> {dispatch({type:"addCin", payload:{cin:data.cin}}); navigate('/details', {state:data});}}><DateFormatter  date={date}/></div> )
            },
            {
                title: 'Ville',
                dataIndex: 'city',
                key: 'city',
                width: 150,
                render : (record, data) => (
                    <div onClick={()=> {dispatch({type:"addCin", payload:{cin:data.cin}}); navigate('/details', {state:data});}}>{record}</div>
                )
            },
            {
                title: 'Derniere visite',
                dataIndex: 'lastVisit',
                key: 'lastVisit',
                render: (date, data) => (<div onClick={()=> {dispatch({type:"addCin", payload:{cin:data.cin}}); navigate('/details', {state:data});}}><DateFormatter  date={date}/></div> )
            },
            {
                title: 'Actions',
                dataIndex: '',
                key: 'action',
                fixed: 'right',
                width: 90,
                render: (element) => (
                    <Actions element={element}/>
                )
            },
        ];
        return columns;
    };

    return(
        <div className="w-full flex justify-center items-center bg-white rounded-2xl p-4 ">
            <Table 
            columns={getColumns()}
            dataSource={data}
            scroll={{x: 1000, y:370}}
            rowKey={(element)=>{ return element.cin }}          
            pagination={false}
            key={(element)=>{ return element.cin }}
            className="clients-table font-sans"
            />
        </div>
    );
}