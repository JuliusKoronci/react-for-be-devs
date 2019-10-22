import { shallow } from 'enzyme';
import React from 'react';
import { Layout } from '../Layout';

const getWrapper = () => shallow(<Layout />);

describe('Layout', () => {
  it('renders a header inside app', () => {
    const wrapper = getWrapper();
    const match = wrapper.find('.App').find('header');

    expect(match).toHaveLength(1);
  });
});
