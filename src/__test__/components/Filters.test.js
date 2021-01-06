import React from 'react';
import { mount, shallow } from 'enzyme';
import Filters from '../../components/Filters';
import FiltersMock from '../../__mocks__/FiltersMock';

describe('<Filters />', () => {
  const handleChangeFilterInputs = jest.fn();
  const handleClickFilterInputs = jest.fn();
  const filters = shallow(
    <Filters
      filtersInput={FiltersMock}
      handleChangeFilterInputs={handleChangeFilterInputs}
      handleClickFilterInputs={handleClickFilterInputs}
    />
  );

  test('Filters component render', () => {
    expect(filters.length).toEqual(1);
  });
  test('Check the filter button functionality', () => {
    const handleClickFilterInputs = jest.fn();
    const wrapper = mount(
      <Filters
        filtersInput={FiltersMock}
        handleClickFilterInputs={handleClickFilterInputs}
        handleChangeFilterInputs={handleChangeFilterInputs}
      />
    );
    wrapper.find('button').simulate('click');
    expect(handleClickFilterInputs).toHaveBeenCalledTimes(1);
  });
});
