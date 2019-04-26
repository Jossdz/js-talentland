import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  a{
    color: #FA7356;
     }
  strong{
    text-decoration: underline;
  }
  ::selection {
    background: rgb(247, 186, 89, 0.8); /* WebKit/Blink Browsers */
  }
  ul{
    list-style: none;
  }
`