import Index from './router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    background: {
      default: blue[700],
    },
    secondary: {
      main: '#ffa500',
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container fixed>
          <Index />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
