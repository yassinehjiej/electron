import { Button } from "antd";
import React from "react";
import { getIcon } from "../../../../utils";
import './styles.scss';

export default function AddClient(){
    const addIcon = getIcon('add');
    return(
        <Button className="btn-add">
            <addIcon.icon />
        </Button>
    );
}