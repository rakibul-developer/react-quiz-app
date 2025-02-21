import Layout from "../components/layout/Layout";
import "../styles/App.css";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
        <Login />
      </Layout>
    </div>
  );
}

export default App;
