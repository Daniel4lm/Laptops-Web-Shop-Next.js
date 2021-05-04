import Link from "next/link";
/* material-ui imports */
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';

const useStyles = makeStyles((theme) => ({
    paginator: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: "0 0 0.4rem 0",
        padding: "0.4rem 0",
        background: "#fff",
        boxShadow: "0px 0px 1px 0px rgba(175, 175, 175, 0.6)",
        borderBottom: "4px solid rgba(76, 175, 80, 0.7)",
        "& > *": {
            margin: "0 0.5rem"
        }
    },
    navBtn: {
        background: "rgba(76, 175, 80)",
        color: "#fff",
        fontSize: '1em',
        margin: '0 0.2rem',
        boxShadow: "0px 0px 1px 0px rgba(94, 94, 94, 0.8)",
        "&:hover, &:active": {
            background: "rgba(76, 175, 80)",
            boxShadow: "0px 2px 6px 0px rgba(94, 94, 94, 0.8)",
        }
    }
}));

export default function MyPaginator({ curPageNum, numOfPages }) {

    const isBackBtn: boolean = (curPageNum > 0);
    const isForwardBtn: boolean = (curPageNum + 1) < numOfPages;
    const classes = useStyles();

    return (
        <Box className={classes.paginator}>
            <Link href={curPageNum > 1 ? `/laptops/${curPageNum - 1}` : '/laptops'}>
                <Button variant="contained" disabled={!isBackBtn} size="small" color="default" className={classes.navBtn}                    >
                    <NavigateBeforeRoundedIcon /> Previous
                    </Button>
            </Link>
            <h4>{' '}{`${curPageNum + 1}/${numOfPages}`}{' '}</h4>
            <Link href={`/laptops/${curPageNum + 1}`}>
                <Button variant="contained" disabled={!isForwardBtn} size="small" color="primary" className={classes.navBtn}                    >
                    Next <NavigateNextRoundedIcon />
                </Button>
            </Link>
        </Box>
    );
}