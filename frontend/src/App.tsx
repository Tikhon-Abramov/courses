import styled from "styled-components";
import {Account} from "./pages/Account.tsx";
import {Header} from "./components/Header.tsx";


const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
`;

function App() {

  return (
   <Container>
       <Header/>
       <Account/>
   </Container>
  )
}

export default App
