import React from 'react';
import { mount, shallow } from 'enzyme';
import ButtonAdd from '../../components/ButtonAdd';

describe('<ButtonAdd />', () => {
  test('ButtonAdd component render', () => {
    const buttonAdd = shallow(<ButtonAdd />);
    expect(buttonAdd.length).toEqual(1);
  });
  test('Check the button functionality', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<ButtonAdd handleClick={handleClick} />);
    wrapper.find('a').simulate('click');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
