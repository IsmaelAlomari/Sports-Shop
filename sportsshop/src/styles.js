import styled, {createGlobalStyle} from "styled-components"


export const GlobalStyle = createGlobalStyle `

header{
    font-family: serif;
}

body {background-color: ${props => props.theme.backgroundColor}}

`



export const List = styled.div `

 display:flex;
  align-items: center;
  justify-content: center;
  
`

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
