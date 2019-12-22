
export const getComments = () => async dispatch => {
    const result = await fetch('comments/');
    const data_from_server = await result.json();

    dispatch({
        type: 'GET_COMMENT',
        value: data_from_server
    })

} 

export const deleteComment = (id) => async dispatch => {
    const url ='comments/'+id

    const result = await fetch(url,{method: 'DELETE'});

    const data = await result.json();

    
    dispatch({
        type: 'DELETE_COMMENT',
        value: data
    });
}



export const postComment = (body) => async dispatch => {
    const result = await fetch('comments/',{

        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(body)

    });
    const data_from_server = await result.json();

    dispatch({
        type: 'POST_COMMENT',
        value: data_from_server
    })

} 
