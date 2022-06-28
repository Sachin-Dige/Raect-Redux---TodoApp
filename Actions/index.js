export const addTask = (data) => {

    return {
        type: "ADD_TASK",
        payload: {
            id: new Date().toString(),
            data:data
        }
    }
}

export const delTask = (id) => {
    return {
        type: "DEL_TASK",
        id
    }
}


export const removeTask = () => {
    return {
        type: "REM_TASK"
    }
}