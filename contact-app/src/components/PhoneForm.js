import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    }

    // handlechange 에 e 라는 event객체를 input의 객체로서 받는다.
    // 값은 e.target.value로 꺼낸다
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.phone]: e.target.value
        })
    };
    
    handleSubmit = (e) => {
        // 값이 아무것도 안들어오면 submit되지 않도록 한다
        // page가 reloading 되는 것을 방지해주기 위해 e.preventDefault() 를 호출
        e.preventDefault();

        this.props.onCreate({
            name: this.state.name,
            phone: this.state.phone
        });

        this.setState({
            name: '',
            phone: ''
        })
    } 
    // onSubmit -> handleSubmit -> onCreate -> handleCreate
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                name="name"
                placeholder="name" 
                onChange={this.handleChange} 
                value={this.state.name} 
                />
                
                <input 
                name="phone"
                placeholder="phone number" 
                onChange={this.handleChange} 
                value={this.state.phone} 
                />

                <button type="submit">등록</button>

            </form>
        );
    }
}

export default PhoneForm;