import React from 'react';
import axios from 'axios';

import './container.less';
import Loader from '~/components/ui/loader.jsx';
import Setting from '~/components/setting.jsx';
import Item from '~/components/item.jsx';

export default class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allItem: [],
            allCategory: [],
            sizeImage: 250,
            numberStrings: 4,
            loading: true,
            lim: 3,
            off: 0,
            showButtonNext: true
        };
    };

    async itemRequest() {
        try {
            const item = await axios.get(`https://api.jstask.iac.tender.pro/products?lim=${this.state.lim}&off=${this.state.off}`);
            this.categoryRequest(item);
        }
        catch (e) { console.log(e) };
    };

    async categoryRequest(item) {
        let srtingRequest = [];
        let { allItem, allCategory, showButtonNext, lim } = this.state;
        item.data.forEach(element => { srtingRequest.push(element.category_id); allItem.push(element) });
        srtingRequest = srtingRequest.join(',');
        try {
            const category = await axios.get(`https://api.jstask.iac.tender.pro/cat?id=${srtingRequest}`);
            if (item.data < lim) { showButtonNext = false };
            allCategory = allCategory.concat(category.data);
            this.setState({ allItem, allCategory, showButtonNext, loading: false });
        }
        catch (e) { console.log(e) };
    };

    componentDidMount() {
        this.itemRequest();
    };

    onChangeSizeImage(sizeImage) {
        this.setState({ sizeImage })
    };

    onChangeString(numberStrings) {
        this.setState({ numberStrings });
    };

    addItem() {
        let { lim, off, loading } = this.state;
        off = off + lim;
        loading = true;
        this.setState({ off, loading });
        this.itemRequest();
    };

    render() {
        const { sizeImage, numberStrings, allItem, allCategory, showButtonNext, loading } = this.state;
        return (
            <div className="container">
                <Setting
                    valueImage={sizeImage}
                    onChangeImage={value => this.onChangeSizeImage(value)}
                    valueString={numberStrings}
                    onChangeString={value => this.onChangeString(value)} />
                <div className="list">
                    {allItem.map((item, index) => (
                        <Item
                            key={index}
                            category={allCategory[index].name}
                            price={item.price}
                            name={item.name}
                            anno={item.anno}
                            currency={item.currency_id}
                            img='http://placeimg.com/250/250/any'
                            sizeImage={sizeImage}
                            numberStrings={numberStrings} />
                    ))}
                    {showButtonNext
                        ? (loading
                            ? (<Loader />)
                            : (<div className="btn" onClick={() => this.addItem()}>
                                <i className='fa fa-cloud-download' />'Показать еще'</div>))
                        : null}
                </div>
            </div>
        )
    }
};