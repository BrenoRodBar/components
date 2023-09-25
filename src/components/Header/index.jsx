import React from 'react'

import {
    BuscarInputContainer,
    Column,
    Container,
    Row,
    Wrapper,
    Menu,
    MenuRight,
    UserPicture,
    Input
} from './style'

import Button from '../Button';



export default function Header() {
  return (
   <Wrapper>
    <Container>
      <Row>
        
        <Button title='Entrar'></Button>
        <Button title='Cadastrar'></Button>
      </Row> 
    </Container>
   </Wrapper>
  )
}
