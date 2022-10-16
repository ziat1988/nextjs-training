import Link from "next/link";
import React from "react";

import styled from 'styled-components';
const AboutStyle = styled.div`
    button{
      background-color: ${({theme})=>theme.colors.primary} ;
      color: #fff;
      padding: 7px 15px;
      outline: none;
      border: none;
    }
`
function About(props) {
  return (
    <AboutStyle>
      <Link href={"/"}>Back home</Link>
        <h2>About page</h2>
        <button>Demo</button>
    </AboutStyle>
  );
}

export default About;
