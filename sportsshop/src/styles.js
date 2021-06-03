import styled, {createGlobalStyle} from "styled-components"


export const GlobalStyle = createGlobalStyle `

header{
    font-family: serif;
}

background-color: ${props => props.theme.backgroundColor}
`

export const theme = {
  
    mainColor: "#FFCC99",
    backgroundColor : "#CCCCCC",
    textColor : "#616161"
}

export const List = styled.div `

 display:flex;
  align-items: center;
  justify-content: center;
  
`