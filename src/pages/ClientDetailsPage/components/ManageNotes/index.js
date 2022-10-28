import { Button, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useRef, useState } from "react";
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
    const inputRef = useRef(null);

    const cancelHandler = () => {
        setIsvisible(false);
    }
    const openHandler = () =>{
        setIsvisible(true);
    }

    const handleClick = () => {
        setIsInputVisible(true);
        const timeout = setTimeout(() =>  inputRef?.current.focus({
            cursor: 'end',
          }), 200);
        return () => {
          clearTimeout(timeout);
        };
    }
    

    return(
        <>  
            <div className="flex justify-between text-sans font-bold text-2xl mt-8 ml-4 mb-6">
                {`Notes`}
                { (!isInputVisible ) &&
                        <div className="flex absolute bottom-4 right-7">
                        <Button className="btn-add-note" onClick={handleClick}>
                            <addIcon.icon />
                            {`Ajouter une note`}
                        </Button>
                        </div>
                }
            </div>
            <div className=" w-full flex flex-col justify-center items-center bg-white rounded-2xl px-10 py-5">
            <Form className="add-note-form" form={form}>
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
                            <div className="flex flex-col ml-3 ">
                                <Button
                               icon={<editIcon.icon style={{ color: 'white' }}/>} 
                               onClick={() =>  setIsReadOnly(!isReadOnly)}
                               className="btn-edit-note "
                               />
                                <Button 
                                icon={ <deleteIcon.icon style={{ color: 'white' }}/>} 
                                onClick={openHandler}
                                className="btn-delete-note"
                                />
                            </div>
                        </div>
                    </div> 
                )}
    
                {isInputVisible &&
                   <>
                    <div className="pl-7 leading-6 flex items-center text-gray-500 mb-2 mt-5">
                            <DateFormatter date={new Date()} className="font-bold font-sans text-base" />
                        </div>
                        <div className="pl-7 pr-20 ">
                                <TextArea 
                                placeholder="Nouveau commentaire" 
                                autoSize={{ minRows: 3 }} 
                                className="note-input" 
                                ref={inputRef}
                                />
                        </div>
                    </>
                  }
                    <div className="flex w-full justify-center mt-8 pr-16">
                            <Button
                                key="submit"
                                htmlType="submit"
                                className="w-40 min-w-min note-form-btn"
                            >
                                {`Valider`}
                            </Button>

                    </div>
            </Form>
            </div>
            <CustomModal
            open={isvisible}
            onCancel={cancelHandler}
            type='DELETE'
            />
        </>
    );
}