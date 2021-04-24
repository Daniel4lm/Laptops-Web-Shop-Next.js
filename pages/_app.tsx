import { useEffect, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Footer from '@components/footer/Footer';
import NavBar from "@components/navigation/NavBar";
import '@styles/globals.css';

// matrial-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
//import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    //marginTop: '4rem',
    padding: '1rem'
  }
}));


function MyApp({ Component, pageProps }: AppProps) {

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

  return (//
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <NavBar />

        <Box className={classes.container}>
          <Component {...pageProps} />
        </Box>

        <Footer />
      </ThemeProvider>
    </>
  );

}

export default MyApp
