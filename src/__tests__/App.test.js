import React from 'react'
import Enzyme, { shallow, render } from 'enzyme'
import App from '../App'

describe('<App />', () => {
    it("renders correctly using shallow", () => {
        const wrapper = shallow(
            <App />
        );
    
        expect(wrapper).toMatchSnapshot();
    });
    
    it("renders correctly using render", () => {
        const wrapper = render(
            <App />
        );
    
        expect(wrapper).toMatchSnapshot();
    });
})