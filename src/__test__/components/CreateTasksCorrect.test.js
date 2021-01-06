import React from 'react';
import { mount, shallow } from 'enzyme';
import CreateTasksCorrect from '../../components/CreateTasksCorrect';

describe('<CreateTasksCorrect />', () => {
  const createTasksCorrect = mount(<CreateTasksCorrect />);

  test('CreateTasksCorrect component render', () => {
    expect(createTasksCorrect.length).toEqual(1);
  });
  test('Render without Edit', () => {
    const handleClickSuccess = jest.fn();
    const wrapper = mount(
      <CreateTasksCorrect handleClickSuccess={handleClickSuccess} />
    );
    wrapper.find('button').simulate('click');
    expect(handleClickSuccess).toHaveBeenCalledTimes(1);
  });
  test('Render with Edit', () => {
    const createTasksCorrect = shallow(<CreateTasksCorrect edit={true} />);
    expect(createTasksCorrect.length).toEqual(1);
  });
});
