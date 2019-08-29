import React from 'react';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <main>
                {this.props.children}
                <span>dfgsdfgsdfgs</span>
            </main>
        )
    }
}