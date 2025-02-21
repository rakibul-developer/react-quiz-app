import Layout from "../components/layout/Layout";
import "../styles/App.css";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        <Signup />
      </Layout>
    </div>
  );
}

export default App;
