import styled from "styled-components";
import Header from "./Components/Header/Header";

const AppContainer = styled.div`
  margin-top: 5%;
  height: 60vh;
  width: 80vw;
  background-color: white;
  border: 2px solid blue;
`;

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
