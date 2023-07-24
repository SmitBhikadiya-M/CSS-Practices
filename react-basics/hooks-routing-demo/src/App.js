import "./App.css";
import Header from "./components/Header/Header";
import Container from "./components/Container";
import { useLocation } from "react-router-dom";
import { STATES } from "./constants/global-constants";
import SplitView from "./components/SplitView/SplitView";
import NotFound from "./components/NotFound/NotFound";
import Code from './components/Code/Code';
import Output from "./components/Output/Output";

function App() {
  const currentLocation = useLocation();
  const state = currentLocation.pathname.split("/")[1];
  return (
    <Container>
      <Header />
      {
        STATES[state] ? (
          <SplitView
            left={
              <Code
                code={STATES[state]?.CMPString}
                heading={state} />
            }
            right={
              STATES[state] ?
                <Output
                  src={`${window.location.origin}/${state}/output`}
                  fwidth={"100%"}
                  fheight={"100%"}
                  heading={state}
                /> : <h2>Not Found</h2>
            }
          ></SplitView>

        ) : <NotFound />
      }
    </Container>
  );
}

export default App;
