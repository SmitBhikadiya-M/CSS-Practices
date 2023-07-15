import "./App.css";
import Header from "./components/Header/Header";
import Container from "./components/Container";
import Main from "./components/Main/Main";
import { useLocation } from "react-router-dom";
import { STATES } from "./constants/global-constants";

function App() {
  const currentLocation = useLocation();
  const state = currentLocation.pathname.split("/")[1];

  return (
    <Container>
      <Header />
      <Main
        code={STATES[state]?.CMPString}
        hookName={state}
        explanationCMP={
          // eslint-disable-next-line jsx-a11y/iframe-has-title
          STATES[state] ? (
            <iframe
              src={`http://localhost:3000/${state}/output`}
              width={"100%"}
              height={"100%"}
            />
          ) : (
            <>Not Found</>
          )
        }
      />
    </Container>
  );
}

export default App;
