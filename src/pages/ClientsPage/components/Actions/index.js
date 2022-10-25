import { Button } from "antd";
import React, { useState } from "react";
import CustomModal from "../../../../sharedComponets/CustomModal";
import { getIcon } from "../../../../utils";
import { EMPTY_STRING } from "../../../../utils/Constant";
import './styles.scss';

export default  function Actions() {
    const [isvisible, setIsvisible] = useState(false);
    const [selectedModal, setSelectedModal] = useState(EMPTY_STRING);

    const cancelHandler = () => {
        setIsvisible(false);
    }
    const openHandler = () =>{
        setIsvisible(true);
    }

    const deleteIcon = getIcon('delete');
    const editIcon = getIcon('edit');

    return(
        <div className="flex justify-between">
            <Button
            icon={<editIcon.icon style={{ color: 'orange' }}/>} 
            style={{marginRight: 5}} 
            onClick={()=> {setSelectedModal('EDIT'); openHandler(); }} 
            className="btn-edit"
            />
        <Button 
            icon={ <deleteIcon.icon style={{ color: 'red' }}/>} 
            onClick={()=> {
                openHandler(); 
            setSelectedModal('DELETE')}} 
            className="btn-delete"
            />
        {isvisible && 
            <CustomModal 
            open={isvisible}
            onCancel={cancelHandler}
            type={selectedModal}
            />
        }
        </div>
    );
}