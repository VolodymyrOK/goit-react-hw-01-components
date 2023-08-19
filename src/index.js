import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';

const theme = {
  colors: {
    commonFonColor: '#e7ecf2',
    profileFonColor: '#ffffff',
    profileTitleColor: '#122236',
    profileTextColor: '#b5bcc4',
    profileFonStats: '#f3f6f9',
    statMainFonColor: '#ffffff',
    statTitleColor: '#718699',
    statTextColor: '#d7ffff',
    statFonDocx: '#4fc4f8',
    statFonPdf: '#a53cf4',
    statFonMp3: '#e74c66',
    statFonPsd: '#20b8c5',
    friendMainFonColor: '#ffffff',
    friendOnlineTrue: '#6fa665',
    friendOnlineFalse: '#f05d55',
    friendTextColor: '#010101',
    tableMainFonColor: '#ffffff',
    tableTitleTextColor: '#ffffff',
    tableTextColor: '#899098',
    tableHead: '#00bcd5',
    tableLine1: '#ffffff',
    tableLine2: '#ecf1f4',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
