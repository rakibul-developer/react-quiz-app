import Layout from "../components/layout/Layout";
import Home from "../components/pages/Home";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
