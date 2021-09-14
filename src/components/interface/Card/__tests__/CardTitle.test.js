import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { CardTitle } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('<CardTitle />', () => {
  it('Call CardTitle onclick function', () => {
    const mockClick = jest.fn();
    const component = shallow(
      <CardTitle onClick={mockClick}>
        Card Title
      </CardTitle>,
    );

    component.find('button').simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });
});
