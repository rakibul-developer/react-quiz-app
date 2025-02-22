import Layout from "../components/layout/Layout";
import "../styles/App.css";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
        <Quiz />
      </Layout>
    </div>
  );
}

export default App;
