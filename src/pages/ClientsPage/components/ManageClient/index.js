import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
import React from "react";
import './styles.scss';

export default function ManageClient({isNew}){
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
                rules={[{ required: true }]}
            >
                <Input placeholder="Nom"/>
            </Form.Item>
            <Form.Item
                label="Prenom"
                name="firstName"
                rules={[{ required: true}]}
            >
                <Input placeholder="Prenom"/>
            </Form.Item>
            <Form.Item
                label="Sex"
                name="gender"
                rules={[{ required: true}]}
            >
                <Radio.Group >
                <Radio value='female'>Femme</Radio>
                <Radio value='male'>Homme</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="CIN"
                name="cin"
                rules={[{ required: true}]}
            >
                <Input placeholder="CIN"/>
            </Form.Item>
            <Form.Item
                label="Annee de naissance"
                name="birthDay"
                rules={[{ required: true}]}
            >
                <DatePicker placeholder="Annee de naissance"/>
            </Form.Item>
            <Form.Item
                label="Telephone"
                name="phone"
                rules={[{ required: true}]}
            >
                <Input placeholder="Telephone"/>
            </Form.Item>
            <Form.Item
                label="Adresse"
                name="adresse"
            >
                <Input placeholder="Adresse"/>
            </Form.Item>
            <Form.Item
                label="Ville"
                name="city"
            >
                <Input placeholder="Ville"/>
            </Form.Item>
            <Form.Item
                label="Type sanguin"
                name="blood"
                rules={[{ required: true }]}
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
                    rules={[{ required: true }]}
                >
                    <DatePicker placeholder="Derniere visite"/>
                </Form.Item>
            }

            <div className="flex justify-end mt-6">
          <Button className="w-52 min-w-min mr-2.5 form-btn">
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