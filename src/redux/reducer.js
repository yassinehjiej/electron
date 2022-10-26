export default function reducer(state = [], action) {
    // Here is an example for how reducer works 
    //
    //
    // 
    // if(action.type === "addCurrentUser") {
    //     return {
    //         ...state,
    //         currentUser: action.payload.currentUser
    //     }
    // }
    // else if(action.type === "changeRoute") {
    //     return {
    //         ...state,
    //         route: action.payload.route
    //     }
    // }

    if(action.type === "addClients") {
            return {
                ...state,
                clients: action.payload.clients
            }
        }

    return state;
}