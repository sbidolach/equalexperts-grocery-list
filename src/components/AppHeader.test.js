import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from './AppHeader';

describe('<AppHeader />', () => {

  it('renders header message', () => {
    const wrapper = shallow(<AppHeader />);
    const welcome = <span>Equal Experts</span>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });

});
