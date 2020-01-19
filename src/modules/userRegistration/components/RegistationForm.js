import React, { Fragment } from 'react';
import '../styles/homeStyles.css';
import { connect } from 'react-redux';

import { RegisterNewUser } from '../actions/UserRegiastrationAction';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.isUniqueMail = false
        this.state = {
            Name: '',
            Phone: '',
            Email: '',
            Password: '',
            Time: '',
            hasMail: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    UniqueMail = (user) => user.Email == this.state.Email;
    handleSubmit(event) {
        this.isUniqueMail =  this.props.UserList.some(this.UniqueMail)
        
        if (!this.isUniqueMail) {
            this.props.addUser(this.state);
            event.target.reset();
        }
        this.setState({
            hasMail : this.isUniqueMail
         });
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <Fragment>
                <div className="row mt-4">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <form onSubmit={this.handleSubmit}>
                            {/* Name field */}
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                <input name="Name" type="Text" className="form-control" id="Name" aria-describedby="NameHelp" placeholder="Enter Name"
                                    required onChange={this.handleInputChange} />
                            </div>

                            {/* Number filed */}
                            <div className="form-group">
                                <label htmlFor="Phone">Phone</label>
                                <input type="Text" name="Phone" className="form-control" id="Phone" aria-describedby="PhoneHelp" placeholder="Enter Phone" required onChange={this.handleInputChange} />
                            </div>

                            {/* Email filed */}
                            <div className="form-group">
                                <label htmlFor="Email">Email address</label>
                                <input type="email" name="Email" className="form-control" id="Email" aria-describedby="email" placeholder="Enter email" required onChange={this.handleInputChange} />
                                {this.state.hasMail && <label htmlFor="Email" style={{ color: "red" }}>
                                    Email Already Exists, Try with another Mail Id
                                </label>}
                            </div>

                            {/* Password filed */}
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="password" name="Password" className="form-control" id="password" placeholder="Password" required onChange={this.handleInputChange} />
                            </div>

                            <div className="center submit-btn">
                                <button type="submit" className="btn btn-primary m-t-2">Submit</button>
                            </div>
                        </form>


                    </div>
                    <div className="col-2"></div>
                </div>
            </Fragment>
        )
    }
}

const mapDispatchToProps = {
    addUser: RegisterNewUser
}

const mapStateToProps = state => ({
    UserList: state.UserRegistration.UserList
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);