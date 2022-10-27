import { Button, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import CustomModal from "../../../../sharedComponets/CustomModal";
import { getIcon } from "../../../../utils";
import DateFormatter from "../../../../utils/DateFormatter";
import './styles.scss';

export default function ManageNotes({notes}){
    const [form] = Form.useForm();
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [isvisible, setIsvisible] = useState(false);
    const [isReadOnly, setIsReadOnly] = useState(true);
    const deleteIcon = getIcon('delete');
    const editIcon = getIcon('edit');
    const addIcon = getIcon('add');

    const cancelHandler = () => {
        setIsvisible(false);
    }
    const openHandler = () =>{
        setIsvisible(true);
    }

    return(
        <>  
            <div className="flex justify-start text-sans font-bold text-2xl mt-3 ml-3 mb-8">
                {`Notes`}
            </div>
            <div className=" w-full flex flex-col justify-center items-center bg-white rounded-2xl px-10 py-5">
                {notes.map((note) =>
                    <div className="px-7 flex flex-col w-full justify-between" key={note._id}>
                        <div className="font-bold font-sans text-base leading-6 flex items-center text-gray-500 mb-2 mt-5">
                          <DateFormatter date={note.date} className="font-bold font-sans text-base"/>
                        </div>
                        <div className="flex justify-between">
                        <TextArea  
                        autoSize={{ minRows: 3 }}
                        placeholder="Votre commentaire"  
                        defaultValue={note.value} 
                        disabled={isReadOnly}
                        className="note-input"
                        />
                            <div className="flex">
                                <Button 
                                icon={ <deleteIcon.icon style={{ color: 'red' }}/>} 
                                onClick={openHandler}
                                className="btn-delete-note"
                                />
                            </div>
                        </div>
                    </div> 
                )}
                { !isInputVisible &&
                <div className="flex">
                <Button className="btn-add-note" onClick={() => setIsInputVisible(true)}>
                    <addIcon.icon />
                </Button>
                </div>
                }
                {isInputVisible &&
                <Form className="add-note-form" form={form}>
                   <div className="pl-7 leading-6 flex items-center text-gray-500 mb-2 mt-5">
                        <DateFormatter date={new Date()} className="font-bold font-sans text-base"/>
                    </div>
                    <div className="pl-7 pr-16 ">
                        <TextArea showCount placeholder="Nouveau commentaire"  autoSize={{ minRows: 3 }}/>
                    </div>
                    <div className="flex w-full justify-end">
                        <Button
                        key="submit"
                        htmlType="submit"
                        className="w-40 min-w-min mt-3 note-form-btn"
                        >
                         {`Ajouter`}
                        </Button>
                    </div>
                </Form>
                } 
                <Button
                icon={<editIcon.icon style={{ color: 'orange' }}/>} 
                style={{marginRight: 5, marginLeft: 5}} 
                onClick={() =>  setIsReadOnly(!isReadOnly)}
                className="btn-edit-note"
                />
            </div>
            <CustomModal
            open={isvisible}
            onCancel={cancelHandler}
            type='DELETE'
            />
        </>
    );
}