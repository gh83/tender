import React from 'react';
import './not-found.less';

export default class NotFound extends React.Component {
  
    render() {
        return (
            <div className="not-found">
                <i className="fa fa-exclamation-triangle" aria-hidden="true" />
            </div>
        )
    }
};