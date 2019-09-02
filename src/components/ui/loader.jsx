import React from 'react';
import './loader.less';

export default class Loader extends React.Component {
  
    render() {
        return (
            <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        )
    }
};