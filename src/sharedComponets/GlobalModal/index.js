import React from "react";
import { Modal } from "antd";
import './styles.scss';

export default function GlobalModal({ open, children, width = '450px', ...rest }){
    return(
        <Modal 
        width={width}
        className="global-modal"
        {...rest}
        open={open}
        >
            {children}
        </Modal>  
        );
}