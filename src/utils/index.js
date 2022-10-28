import { DeleteOutlined, EditOutlined, SearchOutlined, SyncOutlined, PlusOutlined } from '@ant-design/icons';

export function getIcon(type){
    const iconsList = Object.freeze({
        delete: {
            icon: DeleteOutlined,
        },
        edit: {
            icon: EditOutlined,
        },
        search: {
            icon: SearchOutlined,
        },
        refresh: {
            icon: SyncOutlined ,
        },
        add: {
            icon: PlusOutlined,
        }

    }) 
    return iconsList[type];
}

export const getBloodOptions = [
    { value: "a-", label: 'A-' },
    { value: "a+", label: 'A+' },
    { value: "b-", label: 'B-' },
    { value: "b+", label: 'B+' },
    { value: "o-", label: 'O-' },
    { value: "o+", label: 'O+' },
    { value: "ab-", label: 'AB-' },
    { value: "ab+", label: 'AB+' },
];
  