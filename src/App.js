import React, {useState, useEffect} from 'react';
import './App.css';
import useCustomFetch from './hooks/useCustomFetch';

function App() {
  const[url, setUrl] = useState(null);

  const [data, error, loading] = useCustomFetch(url);
  function getFollowers(e) {
    if(e.key === 'Enter'){
      setUrl('https://api.github.com/users/' + e.target.value);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>
           GitID:
           <input onKeyPress={getFollowers}></input>
           { loading && url && <div>Loading...</div> }
            { !loading && <div>{ data.bio }</div> }
            { error && <div>Error : {error.message}</div> }
        </h2>
      </header>
    </div>
  );
}

export default App;
