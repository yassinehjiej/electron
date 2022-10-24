import { DeleteOutlined, EditOutlined, SearchOutlined, SyncOutlined, PlusOutlined } from '@ant-design/icons';
import ManageClient from '../pages/ClientsPage/components/ManageClient';

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

export const Modals = Object.freeze({
    ADD: {
    title:'Ajouter patient',
    content: <ManageClient isNew/>,
    footer: false,
    width: '500px'
    },
    EDIT: {
    title:'Modifier patient',
    content: <ManageClient />,
    footer: false,
    width: '500px'
    },
    DELETE: {
        title:'Supprimer patient',
        okText:'Oui',
        cancelText:'Non',
        content: 'Etes-vous sur de vouloir supprimer ce patient'
        },
});
