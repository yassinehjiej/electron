import { Button, Form, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllClients, updateClient } from "../../../../service/service";
import CustomModal from "../../../../sharedComponets/CustomModal";
import { getIcon } from "../../../../utils";
import DateFormatter from "../../../../utils/DateFormatter";
import './styles.scss';

export default function ManageNotes({notes, data}){
    const [form] = Form.useForm();
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [isvisible, setIsvisible] = useState(false);
    const [isReadOnly, setIsReadOnly] = useState(true);
    const [id, setId] = useState();
    const [thirdContent, setThirdContent] = useState('');
    const [showBloc, setShowBloc] = useState(notes.length != 0);
    const deleteIcon = getIcon('delete');
    const editIcon = getIcon('edit');
    const addIcon = getIcon('add');
    const inputRef = useRef(null);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        if(notes.length == 0) {setShowBloc(false)};
    },[notes])
    const cancelHandler = () => {
        setIsvisible(false);
    }
    const openHandler = () =>{
        setIsvisible(true);
    }

    const handleClick = () => {
        setShowBloc(true);
        setIsInputVisible(true);
        const timeout = setTimeout(() =>  inputRef?.current.focus({
            cursor: 'end',
          }), 200);
        return () => {
          clearTimeout(timeout);
        };
    }

    const submit = (values) => {
        const dataToPublish = [];
        
        if(values) {
            for (const [key, value] of Object.entries(values)) {
                if(value.length != 0) {
                    dataToPublish.push({
                        date:key,
                        content:value
                    })
                }
         }
       }

        if(thirdContent.length != 0){ 
            const tc = {
                date: new Date(),
                content: thirdContent
        }
        dataToPublish.push(tc);
        }

        const client = {
            firstName: data.name.split(' ')[1],
            lastName: data.name.split(' ')[0],
            cin: data.cin,     
            description: dataToPublish,
          };

        updateClient(client)
            .then(() => {
                setThirdContent('');
                getAllClients()
                    .then((response) => { 
                        dispatch({type:"addClients", payload:{clients:response}});
              });
              message.success("Note ajoutée avec success", 2)})
            .catch((e) => {message.error("Une erreur est survenue"); console.log(e)});
      };
    

    return(
        <>  
            <div className="flex justify-between text-sans font-bold text-2xl mt-8 ml-4 mb-6">
                {showBloc && `Notes`}
                { (!isInputVisible ) &&
                        <div className="flex absolute bottom-4 right-7">
                        <Button className="btn-add-note" onClick={handleClick}>
                            <addIcon.icon />
                            {`Ajouter une note`}
                        </Button>
                        </div>
                }
            </div>
            {showBloc && <div className=" w-full flex flex-col justify-center items-center bg-white rounded-2xl px-10 py-5">
            <Form className="add-note-form" form={form} onFinish={submit}>
                {notes && notes.map((note) =>
                    <div className="px-7 flex flex-col w-full justify-between" key={note.date}>
                        <div className="font-bold font-sans text-base leading-6 flex items-center text-gray-500 mb-2 mt-5">
                          <DateFormatter date={note.date} className="font-bold font-sans text-base"/>
                        </div>
                        <div className="flex justify-between">
                        <Form.Item
                            name={note.date}
                            initialValue={note.content}
                            noStyle
                        >
                        <TextArea  
                        autoSize={{ minRows: 3 }}
                        placeholder="Votre commentaire" 
                        className="note-input" 
                        disabled={isReadOnly}
                        />
                        </Form.Item>
                            <div className="flex flex-col ml-3 ">
                                <Button
                               icon={<editIcon.icon style={{ color: 'white' }}/>} 
                               onClick={() =>  setIsReadOnly(!isReadOnly)}
                               className="btn-edit-note "
                               />
                                <Button 
                                icon={ <deleteIcon.icon style={{ color: 'white' }}/>} 
                                onClick={() => {setId(note.date) ;openHandler();}}
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
                                value={thirdContent}
                                onChange={(e) => setThirdContent(e.target.value)}
                                />
                        </div>
                    </>
                  }
                    {<div className="flex w-full justify-center mt-8 pr-16">
                            <Button
                                onSubmit={submit}
                                key="submit"
                                htmlType="submit"
                                className="w-40 min-w-min note-form-btn"
                            >
                                {`Valider`}
                            </Button>

                    </div>}
            </Form>
            <CustomModal
            open={isvisible}
            onCancel={cancelHandler}
            type='DELETENOTE'
            date={id ?? ''}
            data = {data}
            />
            </div>}
            
            
        </>
    );
}