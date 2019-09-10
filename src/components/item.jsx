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
        let currentCurrency = '';
        switch (currency) {
            case 'rub': currentCurrency = 'rub'
                break;
            case 'doll': currentCurrency = 'doll'
                break;
            case 'eur': currentCurrency = 'eur'
                break;
            default:
                break;
        };
        const clsPrice = ['price', currentCurrency];
        const clsCategory = ['fa', `fa-${categoryId !== undefined ? categoryId : 'hourglass-half'}`];
        return (
            <div className="item">
                <div className="content">
                    <div className="head">
                        <div className="category">
                            <i className={clsCategory.join(' ')} />
                            <a hteg='#'>{category !== undefined ? category : null}</a>
                        </div>
                        <div className={clsPrice.join(' ')}>{this.prettifyPrice(price)}</div>
                    </div>
                    <div className="image-warpper">
                        <div className="img" style={{ width: `${sizeImage}px`, height: `${sizeImage}px`, backgroundImage: `url(${img})` }} />
                    </div>
                    <a href='#' className='name'>{name}</a>
                    <div className="anno" style={{ height: `${numberStrings}px` }}>{anno}</div>
                </div>
            </div>
        )
    };
};