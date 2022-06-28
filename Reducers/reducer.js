const intialState = {
    list : []
}



const reducer = (state=intialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }

        case "DEL_TASK":
            const newList=state.list.filter((elem) => elem.id !== action.id)
            return{
                ...state,
                list:newList
            }

        case "REM_TASK": return {
            ...state,
            list:[]
        }

        default: return state;
    }
}

export default reducer;