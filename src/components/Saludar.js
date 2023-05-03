import React from 'react'
import { Text } from 'react-native'
import  propTypes from 'prop-types'

export const Saludar = (props) => {
    // const {firstName = "Agustin", lastName = "Navarro Galdon" } = props
    const {firstName, lastName } = props
  return (
    <Text>Hola {firstName} {lastName}</Text>
  )
}

// Saludar.defaultProps = {
//     firstName: "Agusting",
//     lastName: "Navarro Galdon"
// }

Saludar.propTypes = {
    firstName: propTypes.string,
    lastName: propTypes.string
}