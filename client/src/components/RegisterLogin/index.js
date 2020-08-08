import React, { Component } from 'react'

class RegisterLogin extends Component {
    render() {
        return (
            <div className="container">
                <h2>Login</h2>
                <div className="row">
                    <form className="col s12"
                       // onSubmit={event => this.submitForm(EventSource)}
                        >
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    name="email"
                                   // value={this.state.email}
                                   // onChange={event => this.handleChange(event)}
                                    id="email"
                                    type="email"
                                    className="validate"
                                />
                                <label htmlFor="email">Email</label>
                                <span className="helper-text"
                                    data-error="Tupe a right type email"
                                    data-success="right"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    name="password"
                                   // value={this.state.password}
                                   // onChange={event => this.handleChange(event)}
                                    id="password"
                                    type="password"
                                    className="validate"
                                />
                                <label htmlFor="password">Password</label>
                                <span className="helper-text"
                                    data-error="wrong"
                                    data-success="right"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button
                                    className="btn waves-effect red lighten-2"
                                    type="submit"
                                    name="action"
                                    onClick={this.submitForm}>
                                    Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default RegisterLogin;