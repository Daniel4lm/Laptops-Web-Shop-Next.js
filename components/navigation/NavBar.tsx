import { useRouter } from "next/router";
import Link from "next/link";
// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    navigation: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '0.4rem 0',
        },
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "&:hover": {
            cursor: 'pointer',
        }
    },
    text: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    navBtn: {
        fontSize: '1em',
        margin: '0 0.2rem',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    }
}));

interface NavBarType {
    title: string;
    menuIcon: boolean;
}

export default function NavBar({ title, menuIcon }: NavBarType) {

    const classes = useStyles();
    const router = useRouter();
    const { pathname } = router;

    const isLaptopsPath: boolean = pathname.startsWith('/laptops');
    const isAboutPath: boolean = pathname.startsWith('/about');

    const renderTitle = () => {

        return (
            <Box className={classes.text}>
                <Typography variant="h6" color="inherit">
                    Our laptps offer
                </Typography>
            </Box>
        );
    }

    return (
        <AppBar position="static" >
            <Toolbar className={classes.navigation}>
                <Typography className={classes.title}>
                    <Link href='/' >
                        {menuIcon &&
                            <Typography variant="h6" >
                                <IconButton color="inherit" aria-label="menu">
                                    <AppsIcon />
                                </IconButton>
                                {title}
                            </Typography>
                        }
                    </Link>

                </Typography>
                {isLaptopsPath && renderTitle()}
                {!isAboutPath &&
                    <Link href='/about'>
                        <Button className={classes.navBtn} color="inherit">About Us</Button>
                    </Link>
                }
            </Toolbar>
        </AppBar>
    );
}