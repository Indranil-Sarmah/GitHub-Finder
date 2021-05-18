import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
import {FaGithub} from "react-icons/fa";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className='container'>
        <p>Are you Looking for any github profile ?</p>
        <img src={loginImg} alt='github user' />
        <h2>GitHub Finder</h2>
        <button className='btn' onClick={loginWithRedirect}>
          Log In / Sign Up
        </button>
        <p className="author">Author : Indranil sarmah</p>
        <p className="github"><FaGithub/></p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 1.5rem;
  }
  p{
    font-weight:bold;
  }

  .author{
    margin-top:1rem;
    margin-bottom:0rem;
    font-weight:normal;
    color:#8c98a2;
    font-size:medium;
  }

  .github{
    color:#6c7a86;
  }

`;
export default Login;
