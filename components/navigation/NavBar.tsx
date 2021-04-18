import { useRouter } from "next/router";
import Link from "next/link";
// matrial-ui imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';

const useStyles = makeStyles((theme) => ({
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
    navBtn: {
        fontSize: '1em',
        margin: '0 0.2rem'
    }
}));

export default function NavBar(props) {

    const classes = useStyles();
    const router = useRouter();
    const { pathname } = router;
    const isLaptopsPath: boolean = pathname.startsWith('/laptops');

    const renderPageNav = () => {
        const { curPageNum, numOfPages } = props;
        //console.log('Total pages: ', numOfPages, ' - current page ', curPageNum)
        const isBackBtn: boolean = (curPageNum > 0);
        const isForwardBtn: boolean = (curPageNum + 1) < numOfPages;

        return (
            <Box>
                <Link href={curPageNum > 1 ? `/laptops/${curPageNum - 1}` : '/laptops'}>
                    <Button variant="contained" disabled={!isBackBtn} size="small" color="default" className={classes.navBtn}                    >
                        <NavigateBeforeRoundedIcon /> Previous
                    </Button>
                </Link>
                <Link href={`/laptops/${curPageNum + 1}`}>
                    <Button variant="contained" disabled={!isForwardBtn} size="small" color="default" className={classes.navBtn}                    >
                        Next <NavigateNextRoundedIcon />
                    </Button>
                </Link>
            </Box>
        );
    }

    return (
        <AppBar position="fixed" >
            <Toolbar className={classes.navigation}>
                <Typography className={classes.title}>
                    <Link href='/'>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Link>
                    <Typography variant="h6">zeH-SHOP Lenovo App</Typography>
                </Typography>

                {isLaptopsPath && renderPageNav()}

                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}