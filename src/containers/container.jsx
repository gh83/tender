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
            numberStrings: 1,
            loading: true,
            lim: 3,
            off: 0,
            showButtonNext: true
        };
    };

    //запрос item , проверка на отображение кнопки
    async itemRequest() {
        let { allItem, showButtonNext } = this.state;
        const { lim, off } = this.state;
        try {
            const item = await axios.get(`https://api.jstask.iac.tender.pro/products?lim=${lim + 1}&off=${off}`);
            if (item.data.length < lim + 1) { showButtonNext = false };
            item.data = item.data.slice(0, lim);
            this.categoryRequest(item.data);
            allItem = allItem.concat(item.data);
            this.setState({ allItem, showButtonNext, loading: false });
        }
        catch (e) { console.log(e) };
    };

    //запрос category
    async categoryRequest(item) {
        let srtingRequest = [];
        let { allCategory } = this.state;
        item.forEach(element => {
            srtingRequest.push(element.category_id);
        });
        srtingRequest = srtingRequest.join(',');
        try {
            const category = await axios.get(`https://api.jstask.iac.tender.pro/cat?id=${srtingRequest}`);
            allCategory = allCategory.concat(category.data);
            this.setState({ allCategory });
        }
        catch (e) { console.log(e) };
    };

    componentDidMount() {
        this.itemRequest();
    };

    //изменение размера изображения
    onChangeSizeImage(sizeImage) {
        this.setState({ sizeImage })
    };

    //изменение количества строк
    onChangeString(numberStrings) {
        this.setState({ numberStrings });
    };

    //добавление элементов на страницу
    addItem() {
        let { off } = this.state;
        const { lim } = this.state;
        off = off + lim;
        this.setState({ off, loading: true });
        this.itemRequest();

    };
    //подсчет высоты элементов 
    annoHeight(value) {
        let num = 14 + value * 14;
        return (num);
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
                            {...item}
                            key={index}
                            category={allCategory[index] !== undefined ? allCategory[index].name : undefined}
                            categoryId={allCategory[index] !== undefined ? allCategory[index].id : undefined}
                            img='http://placeimg.com/250/250/any'
                            sizeImage={sizeImage}
                            numberStrings={this.annoHeight(numberStrings)} />
                    ))}
                    {showButtonNext
                        ? (loading
                            ? (<div className="item more">
                                <Loader />
                            </div>)
                            : (<div className="item more" onClick={() => this.addItem()}>
                                <div className="btn">
                                    <i className='fa fa-cloud-download' />&nbsp;Показать еще
                                </div>
                            </div>)
                        )
                        : null}
                </div>
            </div>
        )
    }
};