import Header from "./Component/Header"
import Footer from "./Component/footer"
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <>
    <Header />
    <Container>
      <main>
        <Outlet/>
      </main>
      </Container>
    <Footer />
    </>
  );
}

export default App;

