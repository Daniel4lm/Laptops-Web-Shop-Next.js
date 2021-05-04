import Laptop from '@model/Laptop';
import { openDB } from "@lib/openDB";
import { GetStaticProps } from 'next';
import Link from "next/link";
import fs from 'fs';
import { join } from 'path';

/* Material-ui imports */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MyPaginator from "@components/paginator/MyPaginator";

interface LaptopsProps {
    laptops: Laptop[];
    curPageNum: number;
    numOfPages: number;
}

const useStyles = makeStyles({
    root: {
        background: '#f5f5f5'
    },
    openBtn: {
        color: "#fff",
        background: 'rgb(7, 177, 77, 0.8)',
        "&:hover": {
            background: 'rgb(7, 177, 77, 0.7)',
        },
    },

});

export default function Laptops({ laptops, curPageNum, numOfPages }: LaptopsProps) {

    const classes = useStyles();

    return ( 
        <Grid container direction="column">

            <MyPaginator curPageNum={curPageNum} numOfPages={numOfPages} />

            <Grid container spacing={2}>
                {laptops.map((laptop) => (
                    <Grid key={laptop.id} item xs={12} sm={6} lg={3}>

                        <Card>
                            <Link href={`/laptop/${laptop.id}`}>
                                <a>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt={laptop.name + laptop.brand}
                                            height="250"
                                            image={laptop.imgUrl[0]}
                                            title={laptop.brand + ' ' + laptop.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {laptop.brand + ' ' + laptop.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </a>
                            </Link>
                            <CardActions>
                                <Link href={`/laptop/${laptop.id}`}>
                                    <Button size="small" color="primary">
                                        Open
                            </Button>
                                </Link>
                                <Button className={classes.openBtn} size="small" color="secondary">
                                    Learn More
                            </Button>
                            </CardActions>
                        </Card>

                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {

    /* Pagination */
    const curPage = context.params?.curPage;
    const curPageNum: number = (Number(curPage) || 0);

    /* Paginatio borders */
    const minRange: number = curPageNum * 5;
    const maxRange: number = (curPageNum + 1) * 5;

    const myDB = await openDB();
    const laptops = await myDB.all("SELECT * FROM laptops WHERE id BETWEEN ? AND ?;", [minRange + 1, maxRange]);
    const { total } = await myDB.get("SELECT COUNT(*) AS total FROM laptops ;");
    const numOfPages: number = (Math.ceil(total / 5.0));

    const serviceDirectory = join(process.cwd(), 'public');

    laptops.map((laptop) => {
        const imgNames: string[] = fs.readdirSync(`${serviceDirectory}${laptop.imgUrl}`, "utf-8");
        const images = imgNames.map(img => `${laptop.imgUrl}${img}`);
        laptop.imgUrl = images;
    })

    return {
        props: {
            laptops,
            curPageNum,
            numOfPages
        }
    }
}