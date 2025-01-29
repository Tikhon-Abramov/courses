import styled from "styled-components";
import {Account} from "./pages/Account.tsx";


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
       <Account/>
   </Container>
  )
}

export default App
