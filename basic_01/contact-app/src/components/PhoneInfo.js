import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '아무개',
            phone: '010-0000-0000',
            id: 0
        },
    }

    state = {
        // 우리는 수정 버튼을 눌렀을 떄 editing 값을 true 로 설정해줄것입니다.
        // 이 값이 true 일 때에는, 기존에 텍스트 형태로 보여주던 값들을
        // input 형태로 보여주게 됩니다.
        editing: false,
        // input 의 값은 유동적이겠지요? input 값을 담기 위해서 각 필드를 위한 값도
        // 설정합니다
        name: '',
        phone: '',
    }

    shouldComponentUpdate(nextProps, nextState) {
        // this.state와 nextState가 다른 경우
        // return true
        if (this.state !== nextState) {
            return true;
        }
        // 그 외
        // props로 받아오던 info값이 달라진 경우
        return this.props.info !== nextProps.info;
        // state값도 똑같고, info값도 똑같은 경우 render함수를 다시 호출하지 않는다.
        // 그래서 성능최적화
    }

    
    handleRemove = () => {
        // 삭제 버튼이 클릭되면 onRemove에 id를 넣어서 호출
        // props로 받아온 id를 전달
        const { info, onRemove } = this.props;
        // console.log(onRemove, info.id)
        onRemove(info.id);
    }

    // editing 값을 반전시키는 함수
    // true -> false, false -> true
    handleToggleEdit = () => {
        // true -> false
        // onUpdate 를 사용해서 부모 컴포넌트에게 알림


        // false -> true
        // state에 info 값들 넣어주기
        const { info, onUpdate } = this.props;
        if (this.state.editing){
            // editing이 true인 상태라면
            // onUpdate에 id값을 넣어준다.
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
        } else {
            this.setState({
                // 기존 값을 입력란에 넣은 상태로 수정할 수 있도록 한다.
                name: info.name,
                phone: info.phone,
            })
        }
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }

    // input 에서 onChange 이벤트가 발생 될 때
    // 호출되는 함수입니다
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // 여기서는, editing 값이 바뀔 때 처리 할 로직이 적혀있습니다.
        // 수정을 눌렀을땐, 기존의 값이 input에 나타나고,
        // 수정을 적용할땐, input 의 값들을 부모한테 전달해줍니다.

        const { info, onUpdate } = this.props;
        if (!prevState.editing && this.state.editing) {
            // editing 값이 false -> true 로 전환 될 때
            // info 의 값을 state 에 넣어준다
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if (prevState.editing && !this.state.editing) {
            // editing 값이 true -> false 로 전환 될 때
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    render() {
        const { editing } = this.state;
        const { name, phone } = this.props.info;


        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };


        console.log(name);

        // ? => true : => flase
        if (editing) { // 수정모드
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }


        // 일반모드

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;