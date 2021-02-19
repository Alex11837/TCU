import React from 'react';
import TramitesRRH from '../components/TramitesRRH';
import TramitesRRHService from '../service/TramitesRRHService';

class TramitesRRHPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tramites: {},
        }
        this.TramitesRRHService = new TramitesRRHService();
    }
    componentDidMount() {
        this.findData()
    }

    findData() {
        this.TramitesRRHService.getTramitesRRH().then((data) =>
            this.setState({
                tramites: data.data,
                loading: false,
            })
        )
    }
    render() {
        return (
            this.state.tramites && <div/>
        );
    }

}


export default TramitesRRHPage;