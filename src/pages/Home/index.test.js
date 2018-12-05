import React from 'react';
import { mount } from 'enzyme';

import { Fab } from '@material-ui/core';
import { MemoryRouter } from 'react-router'

import App from '../../App';

describe('<HomePage />', () => {

  it('renders header home page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    );

    const headerTitle = <span>Grocery List</span>;
    expect(wrapper.contains(headerTitle)).toEqual(true);
  });

  it('renders <Fab /> components', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    );

    expect(wrapper.find(Fab)).toHaveLength(1);
  });

});
