import React from 'react';
import Login from '../../components/component/Login';
import UserService from '../../services/UserService';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: {},
        }
        this.UserService = new UserService();
    }
    componentDidMount() {
        this.findData()
    }

    findData() {
        this.UserService.getUser().then((data) =>
            this.setState({
                login: data.data,
                loading: false,
            })
        )
    }
    render() {
        return (
            this.state.login && <Login login={this.state.login} />
        );
    }

}


export default LoginPage;