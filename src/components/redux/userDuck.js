//constanst
const initialData={
    loggedIn: false
}
const LOGIN="LOGIN";

//reducder
export default function reducer(state=initialData, action){
    switch (action.type){
        case LOGIN:
        default: return state;
    }
}
// actions
