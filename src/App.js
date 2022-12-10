import styled from "styled-components";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

const AppContainer = styled.div`
  margin-top: 5%;
  height: 60vh;
  width: 80vw;
  background-color: white;
  border: 2px solid blue;

  display: flex;
  flex-direction: column;
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
