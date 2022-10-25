import { Button } from "antd";
import React, { useState } from "react";
import CustomModal from "../../../../sharedComponets/CustomModal";
import { getIcon } from "../../../../utils";
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
        <CustomModal 
            open={isvisible}
            onCancel={cancelHandler}
            type='ADD'
        />
        </>
    );
}