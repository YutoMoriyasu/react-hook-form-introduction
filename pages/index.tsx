import { Container } from '@mui/material'
import type { NextPage } from 'next'
import MyFirstForm, { SignInFormData } from '../src/components/MyFirstForm'

const Home: NextPage = () => {

  const handleFormSubmit = (data: SignInFormData) => {
    console.log('email: ', data.email)
    console.log('password: ', data.password)
  }

  return (
    <Container maxWidth="sm" sx={{ py: 10 }}>
      <MyFirstForm handleFormSubmit={handleFormSubmit} />
    </Container>
  )
}

export default Home
