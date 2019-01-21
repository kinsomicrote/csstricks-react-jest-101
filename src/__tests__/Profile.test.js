import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Profile from '../Profile';

const user = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    username: 'johndoe',
    image: null
}

describe ('<Profile />', () => {
    it ('accepts user props', () => {
        const wrapper = mount(<Profile user={user} />)
        const value = wrapper.find('h4').text()
        expect(value).toEqual('John Doe')
    })

    it ('works', () => {
        const wrapper = mount(<Profile user={user} />);
        expect(wrapper.props().user).toEqual(user)
    })
})