import axios from "axios";


const url = "http://localhost:3001/api/client";

export async function getAllClients() {
  const response = await axios.get(url);
  return response.data;
}

export async function addClient(client) {
  const { firstName, lastName, cin, organizationName, phone, address, city, birthday, gender, blood , lastVisit} = client;
  const response = await axios.post(url, {
    name: lastName + ' ' + firstName,
    cin: cin,
    organizationName: organizationName,
    phone: phone,
    gender: gender,
    address: address,
    city: city,
    birthday: birthday,
    blood: blood,
    description: '',
    lastVisit: lastVisit
  });

  return response.data;
}

export async function updateClient(client) {
  const { firstName, lastName, cin, organizationName, phone, address, city, birthday, gender, blood , lastVisit} = client;
  const response = await axios.put(url, {
    name: lastName + ' ' + firstName,
    cin: cin,
    organizationName: organizationName,
    phone: phone,
    gender: gender,
    address: address,
    city: city,
    birthday: birthday,
    blood: blood,
    description: '',
    lastVisit: lastVisit
  });

  return response.data;
}

export async function deleteClient(cin) {
    const response = await axios.delete(url + `/${cin}`);
    return response;
}
