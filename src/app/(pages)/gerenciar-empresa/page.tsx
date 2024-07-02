import Button from '@/app/components/UI/Button/Button';
import Container from '@/app/components/Layout/Container/Container'
import React from 'react'

const GerenciarEmpresas = () => {
  return (
    <Container>
      <h1>Gerenciar Empresas</h1>
      <Button bg='secondary'>cadastrar procurador</Button>
    </Container>
  )
}

export default GerenciarEmpresas;