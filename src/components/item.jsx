import React from 'react';

import './item.less';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { img, sizeImage, category, price, name, anno, numberStrings, currency } = this.props;
        const cls = ['price', currency === 'rub' ? 'rub' : ''];
        return (
            <div className="item">
                <div className="head">
                    <div className="category">{category}</div>
                    <div className={cls.join(' ')}>{price}</div>
                </div>
                <img src={img} style={{ width: `${sizeImage}px`, height: `${sizeImage}px` }} />
                <a href='#' className='name'>{name}</a>
                <div className="anno">{anno}</div>
            </div>
        )
    };
};