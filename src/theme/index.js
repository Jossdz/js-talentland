import theme from 'mdx-deck/themes'
import { underline } from 'ansi-colors';

export default {
  ...theme,
  font: 'Roboto, sans-serif',
  h1: {
    textTransform: 'uppercase',
    fontWeight: 600,
    font: 'Lato'
  },
  h2: {
    
  },
  h3: {
    margin: 0,
    padding: 0
  },
  p: {
    fontSize: '1.8rem',
  },
  monospace: '"Dank Mono", Josefin Sans, Sans Serif',
  img: {
    maxWidth: '100%'
  },
  weights: 400,
  li: {
    paddingBottom: '20px',
    fontSize: '3vw'
  },
  ul: {
    listStyle: 'none',
    paddingLeft: '20px',
    display: 'inline-block'
  },
  strong:{
    textDecoration: 'underline',
  },
  b:{
    textDecoration: 'underline',
  },
  colors: {
    text: '#323330',
    background: '#F8DA59',
    link: '#DC97A1',
  }
}