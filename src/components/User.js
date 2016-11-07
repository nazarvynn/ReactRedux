import React, { Component, PropTypes } from 'react'

class User extends Component {
    render() {
        const { name } = this.props;

        return <div><p>Hello {name}!</p></div>;
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired
};

export default User;