import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import { CrudUsecase } from './crudUsecase/CrudUsecase';
import SampleTabs from './MuiUsecase/MuiUsecase';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: "#116D6E",
    },
    secondary:{
      main:'#FFFFFF'
    }
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <SampleTabs />
      </ThemeProvider>
    </div>
  );
}

export default App;
