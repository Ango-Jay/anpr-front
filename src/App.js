import Landing from "./pages/landing/landing";
import Result from "./pages/result/result";
import Footer from "./components/footer";
import { BrowserRouter,Routes,
  Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
        <Route path="/" element={ <Landing />} exact />
        <Route path="/result" element={ <Result />} exact  />
    </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
