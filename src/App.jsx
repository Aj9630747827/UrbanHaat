import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import PageContextProvider from "./store/PageContextProvider";

function App() {
  return (
    <>
      <PageContextProvider>
        <div className="App">
          <Header />
          <div className="main">
            <MainPage />
          </div>
        </div>
      </PageContextProvider>
    </>
  );
}

export default App;
