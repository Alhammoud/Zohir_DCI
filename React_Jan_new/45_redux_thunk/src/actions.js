
// wir definieren globale asynchrone Function ,die nach beedigung Nachricht an dispatcher schickt.

export const loadUsers = () => async dispatch => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const obj = await result.json();

    dispatch({
        type: 'LOAD_USERS',
        value: obj
    })

} 