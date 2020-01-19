import React from 'react';

const diff_minutes = (dt2, dt1) => {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));

}
const UserRow = ({ user }) => {


    return (
        <tr>
            <td>{user.Id}</td>
            <td>{user.Name}</td>
            <td>{user.Phone}</td>
            <td>{user.Email}</td>
            <td>{user.Password}</td>
            <td>{diff_minutes( new Date(), new Date(user.Time) )} minutes ago</td>
        </tr>
    )
}

export default UserRow;