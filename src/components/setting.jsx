import React from 'react';

import './setting.less';

export default class Setting extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { onChangeImage, onChangeString, valueImage, valueString } = this.props;
        return (
            <div className="setting">
                <div>
                    <div>Максимальный размер изображения:&nbsp;{valueImage}x{valueImage}</div>
                    <input
                        type='range'
                        min='100'
                        max='250'
                        step='1'
                        value={valueImage}
                        onChange={e => onChangeImage && onChangeImage(e.target.value)} />
                </div>
                <div>
                    <div>Минимальная высота описания:&nbsp;{valueString}</div>
                    <input
                        type='range'
                        min='1'
                        max='10'
                        step='1'
                        value={valueString}
                        onChange={e => onChangeString && onChangeString(e.target.value)}
                    />
                </div>
            </div>
        )
    }
};