import { Button } from "antd";
import React, { useState } from "react";
import GlobalModal from "../../../../sharedComponets/GlobalModal";
import { getIcon, Modals } from "../../../../utils";
import './styles.scss';

export default function AddClient(){
    const [isvisible, setIsvisible] = useState(false);
    const addIcon = getIcon('add');

    const cancelHandler = () => {
        setIsvisible(false);
    }
    const openHandler = () =>{
        setIsvisible(true);
    }

    return(
        <>
        <Button className="btn-add" onClick={() => { openHandler(); } }>
            <addIcon.icon />
        </Button>
        <GlobalModal
            title={Modals.ADD.title}
            open={isvisible}
            onCancel={cancelHandler}
            okText={Modals.ADD.okText}
            cancelText={Modals.ADD.cancelText}
            footer={Modals.ADD.footer}
            width={Modals.ADD.width}
        >
                {Modals.ADD.content}
        </GlobalModal>
        </>
    );
}