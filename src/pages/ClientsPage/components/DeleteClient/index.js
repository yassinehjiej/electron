import { Button } from "antd";
import React from "react";
import './styles.scss';

export default function DeleteClient({cancelHandler, clientCin}){
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
                >
                    Oui
                </Button>
            </div>
            </>
    );
}