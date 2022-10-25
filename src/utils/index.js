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
