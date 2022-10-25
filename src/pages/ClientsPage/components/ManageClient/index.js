import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
import React from "react";
import FormRules from "../../../../utils/FormRules";
import './styles.scss';

export default function ManageClient({isNew, cancelHandler}){
    const [form] = Form.useForm();
    const { Option } = Select;

    return(
        <div className="overflow-y-scroll h-80 pl-5 pr-2">
            <Form
            form={form}
            layout="vertical"
            className="manage-client"
            >
            <Form.Item
                label="Nom"
                name="lastName"
                rules={[FormRules.required(), FormRules.name()]}
            >
                <Input placeholder="Nom"/>
            </Form.Item>
            <Form.Item
                label="Prenom"
                name="firstName"
                rules={[FormRules.required(), FormRules.name()]}
            >
                <Input placeholder="Prenom"/>
            </Form.Item>
            <Form.Item
                label="Sex"
                name="gender"
                rules={[FormRules.required()]}
            >
                <Radio.Group >
                <Radio value='female'>Femme</Radio>
                <Radio value='male'>Homme</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="CIN"
                name="cin"
                rules={[FormRules.required()]}
            >
                <Input placeholder="CIN"/>
            </Form.Item>
            <Form.Item
                label="Annee de naissance"
                name="birthDay"
                rules={[FormRules.required()]}
            >
                <DatePicker placeholder="Annee de naissance"/>
            </Form.Item>
            <Form.Item
                label="Telephone"
                name="phone"
                rules={[FormRules.required(), FormRules.phone]}
            >
                <Input placeholder="Telephone"/>
            </Form.Item>
            <Form.Item
                label="Adresse"
                name="adresse"
                rules={[FormRules.address]}
            >
                <Input placeholder="Adresse"/>
            </Form.Item>
            <Form.Item
                label="Ville"
                name="city"
                rules={[FormRules.alphanumeric()]}
            >
                <Input placeholder="Ville"/>
            </Form.Item>
            <Form.Item
                label="Type sanguin"
                name="blood"
                rules={[FormRules.required()]}
            >
                <Select placeholder='Type sanguin'
                    >
                    <Option value="a">A</Option>
                    <Option value="b">B</Option>
                    <Option value="ab">AB</Option>
                    <Option value="o">O</Option>
                </Select>
            </Form.Item>
            {!isNew && 
                <Form.Item
                    label="Derniere visite"
                    name="consult"
                    rules={[FormRules.required()]}
                    >
                    <DatePicker placeholder="Derniere visite"/>
                </Form.Item>
            }

            <div className="flex justify-end mt-6">
          <Button className="w-52 min-w-min mr-2.5 form-btn" onClick={cancelHandler}>
            Annuler
          </Button>
          <Button
            key="submit"
            htmlType="submit"
            className="w-52 min-w-min form-btn btn-submit"
          >
            {isNew ? 'Ajouter' : 'Modifier'}
          </Button>
        </div>
         </Form>
        </div>
    );
}