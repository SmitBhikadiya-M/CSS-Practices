import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark'
  },
});

const Theme = ({theme, children}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
} 

export default Theme;