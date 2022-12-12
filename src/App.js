import styled from "styled-components";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

const AppContainer = styled.div`
  margin-top: 5%;
  height: auto;
  
  width: fit-content;
  background-color: white;

  display: flex;
  flex-direction: column;

  @media (max-width: 1280px) {
    margin-bottom: 150px;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Main />
    </AppContainer>
  );
}

export default App;
