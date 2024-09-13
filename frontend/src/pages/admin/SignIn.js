import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../../redux/user/userSlice";

import "./SignUp.css";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector( state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password){
      return dispatch(signInFailure('Please fill out all fields.'));
    }

    try {
      dispatch(signInStart);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false){
        dispatch(signInFailure(data.message));
      }

      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/admin');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  }

  return (
    <div className="">
      <div className="">
        {/* left */}
        <div className="">
          <Link to="/" className="">
            <span className="">Elegent Impressions</span>
            Blog
          </Link>
          <p className="">
            This is a demo project. You can sign in with your email and password
            or with Google.
          </p>
        </div>

        <div className="">
          <form className="" onSubmit={handleSubmit}>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="email@example.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
                <TextInput type="password"
                placeholder="Password" 
                id="password" 
                onChange={handleChange}
                />
            </div>
            <Button type="submit" disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner className="spinner"/>
                    <span>Loading...</span>
                  </>
                ) : (
                  'Sign In'
                )
              }
            </Button>
          </form>
          <div className="">
            <span>Don't have an account?</span>
            <Link to="/sign-up">Sing Up</Link>
          </div>
          {
            errorMessage && (
              <Alert>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default SignIn;
