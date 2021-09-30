import React from 'react'

export default function Form({inputText, setInputText, todos, setTodos}) {
    //here i can write js code and function
    const inputTexthandler = (e) =>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) =>{
        e.preventDefault()    
        setTodos([
            ...todos,
            {text: inputText, completed:false, id:Math.random() *1000 }
        ])
        setInputText("")
    }
    return (
        <div>
            <form>
                <input value={inputText} onChange={inputTexthandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="btn btn-success" type="submit">Submit</button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
