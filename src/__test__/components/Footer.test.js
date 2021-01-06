import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  
  test('Footer component render', () => {
    expect(footer.length).toEqual(1);
  });
  /*
  test('Render el link al perfil de LinkedIn', () => {
    expect(footer.find('.global-color-text').text()).toEqual(
      'Alejandro Herrera Turra'
    );
  });*/
});
