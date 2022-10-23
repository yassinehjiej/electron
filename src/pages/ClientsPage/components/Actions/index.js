import { Button } from "antd";
import React, { useState } from "react";
import GlobalModal from "../../../../sharedComponets/GlobalModal";
import { getIcon, Modals } from "../../../../utils";
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
            <GlobalModal 
             title={Modals[selectedModal].title}
             open={isvisible}
             onCancel={cancelHandler}
             okText={Modals[selectedModal].okText}
             cancelText={Modals[selectedModal].cancelText}
             footer={Modals[selectedModal].footer}
             width={Modals[selectedModal].width}
            >
             {Modals[selectedModal].content}
            </GlobalModal>
        }
        </div>
    );
}