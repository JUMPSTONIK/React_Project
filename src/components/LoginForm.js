import React from 'react'
import {TextInput, Button, Text} from "react-native"

export default function LoginForm() {
  return (
    <>
        <TextInput placeholder='Email'/>
        <TextInput placeholder='Contrasena'/>
        <Button title='Enviar' onPress={() => console.log("Enviado")}/>
    </>
  )
}
