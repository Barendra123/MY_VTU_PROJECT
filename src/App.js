import Header from "./Component/Header"
import Footer from "./Component/footer"
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <>
    <Header />
    <Container>
      <main>
        <HomeScreen/>
      </main>
      </Container>
    <Footer />
    </>
  );
}

export default App;

