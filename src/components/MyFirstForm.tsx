import { TextField, Button, Card, Typography } from "@mui/material"
import { FC } from "react"
import { useForm } from "react-hook-form"

export type SignInFormData = {
  email: string
  password: string
}

type Props = {
  handleFormSubmit: (data: SignInFormData) => void
}

const MyFirstForm: FC<Props> = ({ handleFormSubmit }) => {
  const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm<SignInFormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    }
  })

  return (
    <Card sx={{ p: 4 }}>
      <Typography variant="h4" textAlign="center" sx={{ mb: 4 }}>
        Sign in with email address
      </Typography>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField
          {...register('email', {
            required: 'You must enter an email address',
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'You must provide a valid email address'
            }
          })}
          label='email'
          type='email'
          fullWidth
          margin="normal"
          error={Boolean(errors?.email)}
          helperText={Boolean(errors?.email) && errors.email?.message}
        />
        <TextField
          {...register('password', {
            required: 'You must enter a password'
          })}
          label='password'
          type="password"
          fullWidth
          margin="normal"
          error={Boolean(errors?.password)}
          helperText={Boolean(errors?.password) && errors.password?.message}
        />
        <Button type="submit" variant="contained" disabled={isSubmitting || !isValid}>
          Sign In
        </Button>
      </form>
    </Card>
  )
}

export default MyFirstForm
