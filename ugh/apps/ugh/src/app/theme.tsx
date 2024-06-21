'use client';

import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';



const theme = createTheme({});

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => (

    <ThemeProvider theme={theme}>{children}</ThemeProvider>

);
