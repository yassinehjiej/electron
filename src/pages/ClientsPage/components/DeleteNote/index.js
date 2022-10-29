import { Button, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { getAllClients, updateClient } from "../../../../service/service";
import './styles.scss';

export default function DeleteNote({cancelHandler, date, data}){
    const dispatch = useDispatch();
    const onSubmit = () => {

        const description = data.description.filter((element) => element.date != date);

        const client = {
            firstName: data.name.split(' ')[1],
            lastName: data.name.split(' ')[0],
            cin: data.cin,     
            description: description,
          };

        updateClient(client)
            .then(() => {
                getAllClients()
                    .then((response) => { 
                        dispatch({type:"addClients", payload:{clients:response}});
              });
              message.success("Note suppriméé avec success", 2);
            cancelHandler()})
            .catch((e) => {message.error("Une erreur est survenue"); console.log(e)});
    }
    return(
        <>
        <div className="text-sans text-lg">
            Etes-vous sur de vouloir supprimer cette note ?
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