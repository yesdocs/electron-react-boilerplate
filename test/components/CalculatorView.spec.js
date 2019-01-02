import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Calculator from '../../app/components/CalculatorDisplay';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  
  const component = shallow(<Calculator />);
  return {
    component,
  };
}

describe('Calculator component', () => {
  it('shouldrender', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
});
