import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Footer from './shared/Footer';

import UserRow from './UserRow';
import { GetUsersInfo } from '../actions/UserRegiastrationAction';

const UserDetails = ({UserList}) => {
    
        return (
            <div>
                <Fragment>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {UserList.length > 0 ?
                                UserList.map((user, i) => <UserRow key={user.Name} user={user} />)
                                : <tr>
                                    <td style={{ textAlign: "center" }} colSpan="6">NO DATA AVAILABLE</td>
                                </tr>
                            }

                        </tbody>
                    </table>

                </Fragment>
                <Footer></Footer>
            </div>
        )
    }



const mapStateToProps = state => ({
    UserList: state.UserRegistration.UserList
})


export default connect(mapStateToProps)(UserDetails);