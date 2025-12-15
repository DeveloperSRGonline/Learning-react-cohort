import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../store/userActions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RegisterHandler = (user) => {
    user.id = nanoid();
    dispatch(asyncRegisterUser(user));
    navigate('/login');
    reset();
  };

  return (
    <div className='login-page'>
      <form onSubmit={handleSubmit(RegisterHandler)} className='login'>
        <h1>Register</h1>

        <input
          type="text"
          placeholder='Choose a username'
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
          placeholder='Create password'
          {...register('password', { required: "Password is required" })}
        />
        {errors.password && <p className="error-msg">{errors.password.message}</p>}

        <button type='submit'>Register</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Register;