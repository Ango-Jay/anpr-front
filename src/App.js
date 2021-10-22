import Landing from "./pages/landing/landing";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Footer />
    </div>
  );
}
