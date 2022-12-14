import React from 'react';
import axios from "axios";

interface ITodos {
    id: number;
    title: string;
}

const defaultUsers: ITodos[] = []


const Todos = () => {

    const [search, setSearch]: [string, (search: string) => void] = React.useState("")
    const [todos, setTodos]: [ITodos[], (users: ITodos[]) => void] = React.useState(defaultUsers)
    const [sortItem, setSortItem]: [ITodos[], (users: ITodos[]) => void] = React.useState(defaultUsers)

    React.useEffect(() => {
        axios.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos')
            .then((res) =>{
                setTodos(res.data)
            })
    },[search])

    const handleChange = (e: {target: {value: string; }}) => {
        setSearch(e.target.value)
    }

    const ascending = () => {
        const sort = todos.sort((a, b) => a.title.localeCompare(b.title)).reverse()
        setSortItem(sort)
        console.log(sort)
    }

    const descending = () => {
        const sort = todos.sort((a, b) => a.title.localeCompare(b.title))
        setSortItem(sort)
        console.log(sort)
    }

    return (
        <div className="mainBlock">
            <ul className="userList">
                <form>
                    <input placeholder="Enter user name..."
                           type="text"
                           className="input"
                           onChange={handleChange}
                           value={search}
                    />
                </form>
                {todos.map((todo) => {
                    if (search === "" || todo.title.toLowerCase().includes(search.toLowerCase())) {
                        return (
                            <li key={todo.id} className="user">{todo.title}</li>
                        )
                    }
                })
                }
            </ul>
            <div className="btnSortGroup">
                <button className="btnSort" onClick={descending}>Descending</button>
                <button className="btnSort" onClick={ascending}>Ascending</button>
            </div>
        </div>
    );
};

export default Todos;