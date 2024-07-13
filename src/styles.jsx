
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    background-color: #FAFAFA;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background-color: #F9ED32;
    color: #252525;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  button:hover {
    background-color: #FFF225;
  }
`;

export default GlobalStyle;
