import styled from "styled-components";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

const AppContainer = styled.div`
  margin-top: 5%;
  height: auto;

  width: 1150px;
  background-color: white;

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
