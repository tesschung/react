import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    // defaultProps을 정할땐 static 값을 넣어줘야 한다.
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined'),
    }

    render() {
        // data값을 props로 받아온다
        // onRemove값을 props로 받아온다.
        const { data, onRemove, onUpdate } = this.props;
        
        console.log('rendering list');

        const list = data.map(
            // data안에 있는 info 값을 PhoneInfo component한테 전달
            info => (
            <PhoneInfo 
                key={info.id}
                info={info}  
                onRemove={onRemove} 
                onUpdate={onUpdate}
            />)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;