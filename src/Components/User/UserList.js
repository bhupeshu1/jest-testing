import React from 'react'
import './style.css'

const UserList = ({ users }) => {
    console.log("{{{", users)
    const renderUserList = users.map((user) => {
        console.log('=-=-=-=-=-=', user.name)
        return (
            <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>)
    });
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>

                </thead>
                <tbody>{renderUserList}</tbody>


            </table>
        </div>
    )
}

export default UserList