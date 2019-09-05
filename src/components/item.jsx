import React from 'react';

import './item.less';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    };

    //разделение цены по 3 цифры
    prettifyPrice(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    };

    render() {
        const { img, sizeImage, category, price, name, anno, numberStrings, currency, categoryId } = this.props;
        const clsPrice = ['price', currency === 'rub' ? 'rub' : ''];
        const clsCategory = ['fa', `fa-${categoryId}`];
        return (
            <div className="item">
                <div className="content">
                    <div className="head">
                        <div className="category">
                            <i className={clsCategory.join(' ')} />
                            <a hteg='#'>{category}</a>
                        </div>
                        <div className={clsPrice.join(' ')}>{this.prettifyPrice(price)}</div>
                    </div>
                    <div className="image-warpper">
                        <div className="img" style={{width: `${sizeImage}px`, height: `${sizeImage}px`, backgroundImage:`url(${img})`}}/>
                    </div>
                    <a href='#' className='name'>{name}</a>
                    <div className="anno" style={{height:`${numberStrings}px`}}>{anno}</div>
                </div>
            </div>
        )
    };
};