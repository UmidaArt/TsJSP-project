import React from 'react';
import axios from "axios";

interface IUsers {
    id: number;
    name: string;
}

const defaultUsers: IUsers[] = []

const Users = () => {

    const [search, setSearch]: [string, (search: string) => void] = React.useState("")
    const [users, setUsers]: [IUsers[], (users: IUsers[]) => void] = React.useState(defaultUsers)

    React.useEffect(() => {
        axios.get<IUsers[]>(`https://jsonplaceholder.typicode.com/users`)
            .then((res) =>{
                setUsers(res.data)
            })
    },[search])

    const handleChange = (e: {target: {value: string; }}) => {
        setSearch(e.target.value)
    }

    let sort = users.sort((a, b) => a.name.localeCompare(b.name))

    const ascending = () => {
        let sort = users.sort((a, b) => a.name.localeCompare(b.name))
        setUsers(sort)
        console.log(sort)
    }

    const descending = () => {
        sort.reverse()
        setUsers(sort)
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
                {sort.map((user) => {
                    if (search === "" || user.name.toLowerCase().includes(search.toLowerCase())) {
                        return (
                            <li key={user.id} className="user">{user.name}</li>
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

export default Users;