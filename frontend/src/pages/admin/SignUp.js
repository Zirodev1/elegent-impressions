import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password){
      return setErrorMessage('Please fill out all fields.');
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/sign-in')
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false)
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
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>

        <div className="">
          <form className="" onSubmit={handleSubmit}>
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="UserName"
                id="username"
                onChange={handleChange}
              />
            </div>
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
                  'Sign Up'
                )
              }
            </Button>
          </form>
          <div className="">
            <span>Have an account?</span>
            <Link to="/sign-in">Sing In</Link>
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

export default SignUp;
