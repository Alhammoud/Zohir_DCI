
// wir definieren globale asynchrone Function ,die nach beedigung Nachricht an dispatcher schickt.

export const loadusers = () => async dispatch => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const obj = await result.json();

    dispatch({
        type: 'LOAD_USERS',
        value: obj
    })

} 

export const searchUsers = (str) => async dispatch => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const obj = await result.json();

    const filteredUsers = obj.filter(
        (user) => user.name.toLowerCase().includes(str.toLowerCase())
                    || user.email.toLowerCase().includes(str.toLowerCase())
    );

    dispatch({
        type: 'SEARCH_USERS',
        value: filteredUsers
    });
}