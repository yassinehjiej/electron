import { Button, DatePicker, Form, Input, Radio, Select, message } from "antd";
import React from "react";
import FormRules from "../../../../utils/FormRules";
import "./styles.scss";
import moment from "moment";
import { addClient, updateClient } from "../../../../service/service";
import { useDispatch } from "react-redux";
import { getAllClients } from "../../../../service/service";

export default function ManageClient({ isNew, cancelHandler, elem }) {
  const [form] = Form.useForm();
  const { Option } = Select;
  const dispatch = useDispatch();

  const initialValues = isNew
    ? {}
    : {
        firstName: elem?.name?.split(" ")[0],
        lastName: elem?.name?.split(" ")[1],
        blood: elem?.blood,
        cin: elem?.cin,
        birthday: elem?.birthday ? moment(elem?.birthday) : "",
        gender: elem?.gender,
        phone: elem?.phone,
        address: elem?.address,
        city: elem?.city,
        lastVisit: elem?.lastVisit ? moment(elem?.lastVisit) : "",
      };

  const submit = (values) => {
    const client = {
      firstName: values.firstName,
      lastName: values.lastName,
      blood: values.blood,
      cin: values.cin,
      birthday: values.birthday,
      gender: values.gender,
      phone: values.phone,
      address: values.address,
      city: values.city,
      lastVisit: values.lastVisit,
    };

    if (isNew) {
      addClient(client)
        .then(() => {getAllClients()
          .then((response) => { 
            dispatch({type:"addClients", payload:{clients:response}});
          });
          cancelHandler();
           form.resetFields();
           message.success("Client ajouté avec success", 2)})
        .catch(() => message.error("Une erreur est survenue"));
      
        return;
    }

    updateClient(client)
        .then(() => {getAllClients()
          .then((response) => { 
            dispatch({type:"addClients", payload:{clients:response}});
          });cancelHandler(); message.success("Client modifié avec success", 2)})
        .catch(() => message.error("Une erreur est survenue"));
  };

  return (
    <div className="overflow-y-scroll h-80 pl-5 pr-2">
      <Form
        form={form}
        layout="vertical"
        className="manage-client"
        initialValues={initialValues}
        onFinish={submit}
      >
        <Form.Item
          label="Nom"
          name="lastName"
          rules={[FormRules.required(), FormRules.name()]}
        >
          <Input placeholder="Nom" />
        </Form.Item>
        <Form.Item
          label="Prenom"
          name="firstName"
          rules={[FormRules.required(), FormRules.name()]}
        >
          <Input placeholder="Prenom" />
        </Form.Item>
        <Form.Item label="Sex" name="gender" rules={[FormRules.required()]}>
          <Radio.Group>
            <Radio value="female">Femme</Radio>
            <Radio value="male">Homme</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="CIN" name="cin" rules={[FormRules.required()]}>
          <Input placeholder="CIN" />
        </Form.Item>
        <Form.Item
          label="Annee de naissance"
          name="birthday"
          rules={[FormRules.required()]}
        >
          <DatePicker placeholder="Annee de naissance" />
        </Form.Item>
        <Form.Item
          label="Telephone"
          name="phone"
          rules={[FormRules.required(), FormRules.numeric()]}
        >
          <Input placeholder="Telephone" />
        </Form.Item>
        <Form.Item label="Adresse" name="adress" rules={[FormRules.address()]}>
          <Input placeholder="Adresse" />
        </Form.Item>
        <Form.Item label="Ville" name="city" rules={[FormRules.alphanumeric()]}>
          <Input placeholder="Ville" />
        </Form.Item>
        <Form.Item label="Type sanguin" name="blood">
          <Select placeholder="Type sanguin">
            <Option value="a-">A-</Option>
            <Option value="a+">A+</Option>
            <Option value="b-">B-</Option>
            <Option value="b+">B+</Option>
            <Option value="o-">O-</Option>
            <Option value="o+">O+</Option>
            <Option value="ab-">AB-</Option>
            <Option value="ab+">AB+</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Derniere visite"
          name="lastVisit"
          rules={[FormRules.required()]}
        >
          <DatePicker placeholder="Derniere visite" />
        </Form.Item>

        <div className="flex justify-end mt-6">
          <Button
            className="w-52 min-w-min mr-2.5 form-btn"
            onClick={cancelHandler}
          >
            Annuler
          </Button>
          <Button
            key="submit"
            htmlType="submit"
            className="w-52 min-w-min form-btn btn-submit"
            onSubmit={submit}
          >
            {isNew ? "Ajouter" : "Modifier"}
          </Button>
        </div>
      </Form>
    </div>
  );
}