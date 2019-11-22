import React from "react";
import "./App.css";
import useJsonFetch from "./hooks/useJsonFetch";

function AppHook({ url }) {
  const [data, loading, error] = useJsonFetch(url);
  return (
    <div className="ui segment">
      {data && <p>{data.status}</p>}
      {loading && <p>Loading</p>}
      {error && <p>Has Error</p>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <div className="ui segments">
          <AppHook url={process.env.REACT_APP_DATA_URL} />
          <AppHook url={process.env.REACT_APP_ERROR_URL} />
          <AppHook url={process.env.REACT_APP_LOADING_URL} />
        </div>
      </div>
    </div>
  );
}

export default App;
