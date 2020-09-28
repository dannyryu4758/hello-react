import React, { Component } from 'react';
import PropsTypes from 'prop-types';

//const MyComponent = (props) => {
//const MyComponent = ({ name, favoriteNumber, children }) => {
//const { name, children } = props;
class MyComponent extends Component {
  static defaultProps = {
    name: '기본이름',
  };
  static propTypes = {
    name: PropsTypes.string,
    favoriteNumber: PropsTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        {/*안녕하세요. 제 이름은 {props.name}입니다.<br />
      children 값은 {props.children}
    입니다.*/}
        언녕하세요. 제 이름은 {name}입니다.
        <br />
        children 값은 {children} 입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

/*
MyComponent.defaultProps = {
  name: '기본이름',
};

MyComponent.propTypes = {
  name: PropsTypes.string,
  favoriteNumber: PropsTypes.number.isRequired,
};
*/
export default MyComponent;
