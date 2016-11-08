import React, { Component, PropTypes } from 'react'

class User extends Component {
    render() {
        const { name, error, handleLogin } = this.props;
        let template;

        if (name) {
            template = <p>Hello {name}!</p>
        } else {
            template = <button className='btn' onClick={handleLogin}>Login</button>
        }

        return <div className="ib user">
            {template}
            {error ? <p className='error'> {error}. <br />Try again</p> : ''}
        </div>;
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired
};

export default User;