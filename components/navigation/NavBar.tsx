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


const useStyles = makeStyles((theme) => ({
    navigation: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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

    const renderTitle = () => {
        const { curPageNum, numOfPages } = props;
        //console.log('Total pages: ', numOfPages, ' - current page ', curPageNum)

        return (
            <Box>
                <Typography variant="h6" color="inherit">
                    Our laptps offer
                </Typography>
            </Box>
        );
    }

    return (// 
        <AppBar position="static" >
            <Toolbar className={classes.navigation}>
                <Typography className={classes.title}>
                    <Link href='/'>
                        <IconButton color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" >zeH-SHOP Lenovo App</Typography>
                </Typography>
                {isLaptopsPath && renderTitle()}
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
} // {isLaptopsPath && renderTitle()}