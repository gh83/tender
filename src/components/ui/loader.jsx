import React from 'react';
import './loader.less';

export default class Loader extends React.Component {
  
    render() {
        return (
            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        )
    }
};