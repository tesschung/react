import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;

  // 배열 다루기
  // 리액트에서는 불변성을 반드시 유지해야한다
  // 어떤 값을 수정해야할때 setState를 반드시 사용
  // 내부의 배열이나 객체를 바꿀 경우에는 기존 배열을 수정하지 않고
  // 그걸 기반으로 새로 배열이나 객체를 만들어서 바꿔야 한다.
  // **concat**을 사용하여 기존에 있는건을 수정하지 않고 새로운 배열을 만든다
  state = {
    information: [
      {
      id: 0,
      name: '정승원',
      phone: '010-0000-0000'
      }
    ],
  }

  handleCreate = (data) => {
    // 비구조 할당 문법
    const { information } = this.state;
    console.log(data);

    this.setState({
      // 세번째 방법
      // Object.assign() 메소드는 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용합니다. 대상 객체를 반환합니다.
      information: information.concat({id: this.id++, ...data })
      // 두번째 방법
      // information: information.concat({
      //   // ...data, // 첫 번째 방법
      //   name: data.name,
      //   phone: data.phone,
      //   id: this.id++
      // })
    });
  }

  handleRemove = (id) => {
    // this.state 여야한다
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id )
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
        ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 값을 덮어쓴다.
        : info // 기존의 값을 그대로 유지한다.
      )
    })
  }

  render() {
    const { information } = this.state;
    return (
      <div className="APP"> 
        <header className="App-header">
        </header>
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(information)}
        <PhoneInfoList 
        data={information} 
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
