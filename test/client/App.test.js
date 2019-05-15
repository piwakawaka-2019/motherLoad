import React from 'react'
import { shallow } from 'enzyme'

import {App} from '../../client/components/App'

test('Title renders on App', () => {
  // Arrange
  const expected = 'MotherLoad'

  // Act
  const wrapper = shallow(<App auth={{isAuthenticated: false}}/>)
  const actual = wrapper.find('h1').text()

  // Assert
  expect(actual).toEqual(expected)
})

test('App has some routes when not logged in', () => {
  // Arrange
  const expected = 9

  // Act
  const wrapper = shallow(<App auth={{isAuthenticated: false}}/>)
  const actual = wrapper.find('Route').length

  // Assert
  expect(actual).toEqual(expected)
})

test('App has one less route when logged in', () => {
  // Arrange
  const expected = 9

  // Act
  const wrapper = shallow(<App auth={{isAuthenticated: true}}/>)
  const actual = wrapper.find('Route').length

  // Assert
  expect(actual).toEqual(expected)
})

// test('Advice route goes to login page when logged out', ( => {
//   //Arrange
//   const expected = '/login'
//   //Act
//   const actual = 
//   //Assert
//   expect(actual).toEqual(expected)
// }))
