import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { toast } from "react-toastify";

import api from "../services/api";
import "../styles/login.css";


function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [showPassword,setShowPassword] = useState(false);

  const [loading,setLoading] = useState(false);



  const handleLogin = async (e)=>{

    e.preventDefault();


    try{

      setLoading(true);


      const res = await api.post("/auth/login",{
        email,
        password
      });


      localStorage.setItem(
        "token",
        res.data.token
      );


      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );


      toast.success("Login Successful");


      navigate("/dashboard");


    }catch(error){

      toast.error(
        error.response?.data?.message ||
        "Login Failed"
      );

    }
    finally{

      setLoading(false);

    }

  };



  return (

    <div className="login-container">


      {/* Left Section */}

      <div className="login-left">

        <div className="overlay">


          <h1>
            Student Management System
          </h1>


          <p>
            Manage students, monitor records,
            and access your dashboard from one place.
          </p>

        </div>

      </div>

      {/* Right Section */}

      <div className="login-right">


        <div className="login-card">

          <h2>
            Welcome Back 👋
          </h2>

          <p>
            Sign in to continue
          </p>


          <form onSubmit={handleLogin}>


            {/* Email */}

            <div className="input-group">


              <FaEnvelope className="input-icon"/>


              <input

                type="email"

                placeholder="Email Address"

                value={email}

                onChange={(e)=>
                  setEmail(e.target.value)
                }

                required

              />


            </div>




            {/* Password */}

            <div className="input-group">


              <FaLock className="input-icon"/>


              <input

                type={
                  showPassword
                  ? "text"
                  : "password"
                }

                placeholder="Password"

                value={password}

                onChange={(e)=>
                  setPassword(e.target.value)
                }

                required

              />



              <span

                className="eye-icon"

                onClick={()=>
                  setShowPassword(!showPassword)
                }

              >

                {
                  showPassword
                  ?
                  <FaEyeSlash/>
                  :
                  <FaEye/>
                }


              </span>



            </div>





            <div className="login-options">


              <label>

                <input type="checkbox"/>

                Remember Me

              </label>



              <Link to="/forgot-password">

                Forgot Password?

              </Link>


            </div>





            <button

              type="submit"

              className="login-btn"

              disabled={loading}

            >

              {
                loading
                ?
                "Logging in..."
                :
                "Login"
              }


            </button>





            <p className="register-link">


              Don't have an account?


              <Link to="/register">

                {" "}Register

              </Link>



            </p>

          </form>

        </div>

      </div>

    </div>

  );

}



export default Login;