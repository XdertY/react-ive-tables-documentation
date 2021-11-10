import logo from './logo.svg';
import './App.css';
import { IntlProvider } from 'react-intl';
import { axios } from 'axios'
import { useEffect} from 'react'
import { Test } from './stories/Test'

function App() {

  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/users/").then(response => {
  //     console.log(response);
  //   })
  // }, [])

  return (
    <IntlProvider locale={"bg-BG"} messages={{}}>
      <div className="App">asd</div>
      <Test/>
    </IntlProvider>

  );
}

export default App;
