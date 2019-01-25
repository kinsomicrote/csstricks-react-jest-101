import React from 'react'
import Enzyme, { shallow, render } from 'enzyme'
import axios from 'axios';
import App from '../App'

jest.mock('axios')

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

    it('calls componentDidMount', () => {
        jest.spyOn(App.prototype, 'componentDidMount')
        const wrapper = shallow(<App />)
        expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
    })

    it('fetches a list of users', () => {
        const getSpy = jest.spyOn(axios, 'get')
        const wrapper = shallow(
            <App />
        )
        expect(getSpy).toBeCalled()
    })
})