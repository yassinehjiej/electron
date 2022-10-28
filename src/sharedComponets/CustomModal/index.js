import React from "react";
import DeleteClient from "../../pages/ClientsPage/components/DeleteClient";
import ManageClient from "../../pages/ClientsPage/components/ManageClient";
import GlobalModal from "../GlobalModal";

export default function CustomModal({type, data, onCancel, ...rest}){
   const Modals = {
        ADD: {
        title:'Ajouter patient',
        content: <ManageClient isNew cancelHandler={onCancel}/>,
        width: '1000px'
        },
        EDIT: {
        title:'Modifier patient',
        content: <ManageClient elem={data} cancelHandler={onCancel}/>,
        width: '1000px'
        },
        DELETE: {
            title:'Supprimer patient',
            okText:'Oui',
            cancelText:'Non',
            content: <DeleteClient clientCin={data?.cin} cancelHandler={onCancel}/>
            },
    };
    
    return(
        <GlobalModal 
             title={Modals[type].title}
             okText={Modals[type].okText}
             cancelText={Modals[type].cancelText}
             footer={Modals[type].footer}
             width={Modals[type].width}
             onCancel={onCancel}
             {...rest}
            >
             {Modals[type].content}
            </GlobalModal>
    );
}