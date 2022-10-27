export default function reducer(state = [], action) {

    if(action.type === "addClients") {
            return {
                ...state,
                clients: action.payload.clients
            }
        }

    if(action.type === "addDetails") {
        return {
            ...state,
            details: action.payload.details
        }
    }

    return state;
}
