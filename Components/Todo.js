import React, { useState } from 'react';
import "./Style.css";

import { useSelector,useDispatch } from "react-redux"
import { addTask,delTask,removeTask } from '../Actions';

const Todo = () => {
    const [input, setInput] = useState('');
    const list= useSelector((state) => state.reducer.list);
    const dispatch = useDispatch();

    

return (
<>
    <div className='main-div'>
        <div className='child-div'>
        <figure>
            <figcaption> 📝 Add Your Task 📝</figcaption>
        </figure>
        <div className='addItems'>
        <input
         type="text" 
         placeholder='✍ Add Task .....'
         value={input}
         onChange= {(event) => setInput(event.target.value)} />

        <i className='btn' onClick={()=> dispatch(addTask(input),setInput(''))}> ➕ </i>
        </div>

        <div className='showItems'>
            {
             list.map((elem) => {  
                 return ( 
            <div className="eachItem" key={elem.id}>
                <input type="checkbox" id="cbox"></input>
               <h3>{elem.data}</h3>
                <i className='delbtn' onClick={()=> dispatch(delTask(elem.id))}> ❌ </i>
                 
            </div>
        )
    })
}
</div>

    <div className="showItems">
        <button className='xbtn effect04' data-sm-link-text="remove All"
        onClick={()=> dispatch(removeTask())}
        ><span>CHECK LIST</span></button>
    </div>
    </div>
</div>      
</>
)
}

export default Todo
