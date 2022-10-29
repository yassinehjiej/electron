export default function reducer(state = [], action) {

    if(action.type === "addClients") {
            return {
                ...state,
                clients: action.payload.clients
            }
        }

    if(action.type === "addCin") {
        return {
            ...state,
            cin: action.payload.cin
        }
    }

    return state;
}
