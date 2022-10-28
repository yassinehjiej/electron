import { Button } from "antd";
import React, { useState } from "react";
import CustomModal from "../../../../sharedComponets/CustomModal";
import { getIcon } from "../../../../utils";
import './styles.scss';

export default function EditClient({element}){
    const [isvisible, setIsvisible] = useState(false);

    const cancelHandler = () => {
        setIsvisible(false);
    }
    const openHandler = () =>{
        setIsvisible(true);
    }
    const editIcon = getIcon('edit');
    return(
        <>
            <Button
            icon={<editIcon.icon style={{ color: 'white' }}/>} 
            style={{marginRight: 10, marginTop: 20}} 
            onClick={openHandler} 
            className="btn-edit-details"
            />
            <CustomModal 
            open={isvisible}
            onCancel={cancelHandler}
            type='EDIT'
            data={element}
            />
        </>
    );
}