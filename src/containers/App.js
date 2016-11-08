import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as userActions from '../actions/UserActions'
import * as pageActions from '../actions/PageActions'

class App extends Component {
    render() {
        const { user, page } = this.props;
        const { getPhotos } = this.props.pageActions;
        const { handleLogin } = this.props.userActions;

        return <div className="row">
            <Page year={page.year} photos={page.photos} getPhotos={getPhotos} loading={page.loading} />
            <User name={user.name} error={user.error} handleLogin={handleLogin} />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        pageActions: bindActionCreators(pageActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)