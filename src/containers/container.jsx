import React from 'react';
import axios from 'axios';

import './container.less';

export default class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            lim: 3,
            off: 0
        };
    };

    async componentDidMount() {
        try {
            const response = await axios.get(`https://api.jstask.iac.tender.pro/products?lim=${this.state.lim}&off=${this.state.off}`);
        }
        catch (e) { console.log(e) };
    };

    render() {
        return (
            <div className="container">
            </div>
        )
    }
};