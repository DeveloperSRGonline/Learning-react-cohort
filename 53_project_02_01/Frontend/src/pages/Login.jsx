import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'
import { asyncLoginUser } from "../store/userActions";
import { useDispatch } from "react-redux";
const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const dispatch = useDispatch()

  const LoginHandler = (user) => {
    dispatch(asyncLoginUser(user))

  }

  return (
    <div className='login-page'>
      <form onSubmit={handleSubmit(LoginHandler)} className='login'>
        <h1>Login</h1>


        <input
          type="text"
          placeholder='Enter your username'
          {...register('username', { required: "Username is required" })}
        />
        {errors.username && <p className="error-msg">{errors.username.message}</p>}


        <input
          type="email"
          placeholder='Enter your email'
          {...register('email', { required: "Email is required" })}
        />
        {errors.email && <p className="error-msg">{errors.email.message}</p>}


        <input
          type="password"
          placeholder='********'
          {...register('password', { required: "Password is required" })}
        />
        {errors.password && <p className="error-msg">{errors.password.message}</p>}

        <button
          type='submit'>Login</button>
        <p>Don't have an account? <a href="/register">Register</a></p>
      </form>
    </div>
  )
}

export default Login