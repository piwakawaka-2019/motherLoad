import React from 'react'
import { shallow } from 'enzyme'

import {Articles} from '../../client/components/Articles'


test('Test article', () => {
    // Arange
    const expected = 'Articles';

    // Act
    const wrapper = shallow(<Articles auth={{isAuthenticated: false}}/>)
    const actual = wrapper.find('h2').text()

    // Assert
    expect((actual).toEqual(expected))
})

test('Article using right tags at right places', () => {
    // Arange 
    const expected = '';

    // Act 
    const wrapper = shallow(<Articles auth={{isAuthenticated: false}}/>)
    const actual = wrapper.find('div, a').text()

    // Assert
    expect((actual).toEqual(expected))
})