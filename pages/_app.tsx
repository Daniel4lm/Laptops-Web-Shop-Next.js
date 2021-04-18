import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Footer from '@components/footer/Footer';
import NavBar from "@components/navigation/NavBar";
import '@styles/globals.css';
import { useEffect, useState } from 'react';
import Head from 'next/head';

// matrial-ui imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
//import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginTop: '4.6rem',
    padding: '1rem'
  }
}));


function MyApp({ Component, pageProps }) {

  const classes = useStyles();

  const [myState, setMyState] = useState<string>('Masha&Bear');

  //console.log('Oage props ', JSON.stringify(pageProps, null, 4));

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <NavBar {...pageProps} />

        <Box className={classes.container}>
          <Component {...pageProps} />
        </Box>

        <Footer />
      </ThemeProvider>
    </>
  );

}

export default MyApp
