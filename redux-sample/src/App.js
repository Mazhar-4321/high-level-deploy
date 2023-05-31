import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import { CrudUsecase } from './crudUsecase/CrudUsecase';
import SampleTabs from './MuiUsecase/MuiUsecase';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { useEffect } from 'react';
import SampleDrawer from './components/SampleDrawer';

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0,0,0,1)",
    },
    secondary:{
      main:'#FFFFFF'
    }
  },
});
function App() {
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  })
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className='sample-tabs'>
      <SampleTabs />
      </div>
      <div className='sample-drawer'>
      <SampleDrawer />
      </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
