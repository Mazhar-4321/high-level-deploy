import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import { CrudUsecase } from './crudUsecase/CrudUsecase';
import SampleTabs from './MuiUsecase/MuiUsecase';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { useEffect } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1B9C85",
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
      <SampleTabs />
      </ThemeProvider>
    </div>
  );
}

export default App;
