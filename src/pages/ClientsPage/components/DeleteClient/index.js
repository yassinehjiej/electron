import { Button, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteClient, getAllClients } from "../../../../service/service";
import './styles.scss';

export default function DeleteClient({cancelHandler, clientCin}){
    const dispatch = useDispatch();
    const onSubmit = () => {
        deleteClient(clientCin).then(() => {
            cancelHandler(); message.success("Client supprimé avec success", 0.5, 
        () => {
            getAllClients()
            .then((response) => dispatch({type:"addClients", payload:{clients:response}}))}
        )
    })
        .catch(() => message.error("Une erreur est survenue"));
    }
    return(
        <>
        <div className="text-sans text-lg">
            Etes-vous sur de vouloir supprimer ce patient
        </div>
        <div className="flex justify-end mt-6">
                <Button className="w-52 min-w-min mr-2.5 form-btn"  onClick={cancelHandler}>
                    Non
                </Button>
                <Button
                    key="submit"
                    htmlType="submit"
                    className="w-52 min-w-min form-btn btn-submit"
                    onClick={onSubmit}
                >
                    Oui
                </Button>
            </div>
            </>
    );
}