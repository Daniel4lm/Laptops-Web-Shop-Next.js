import Laptop from '@model/Laptop';
import { openDB } from "@lib/openDB";
import { GetStaticProps } from 'next';
import Link from "next/link";
import fs from 'fs';
import { join } from 'path';

// Material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

interface LaptopsProps {
    laptops: Laptop[];
}

const useStyles = makeStyles({
    root: {
        background: '#f5f5f5'
    },
});

export default function Laptops({ laptops }: LaptopsProps) {

    const classes = useStyles();

    //console.log(JSON.stringify(images, null, 4));

    return ( // className={classes.root}
        <Grid container spacing={2}>
            {laptops.map((laptop) => (
                <Grid key={laptop.id} item xs={12} sm={6} lg={3}>
                    <Link href={`/laptop/${laptop.id}`}>
                        <a>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={laptop.name + laptop.brand}
                                        height="240"
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
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Open
                                </Button>
                                    <Button size="small" color="secondary">
                                        Learn More
                                </Button>
                                </CardActions>
                            </Card>
                        </a>
                    </Link>
                </Grid>
            ))}
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

    console.log('min ', minRange, 'max ', maxRange)

    const myDB = await openDB();
    const laptops = await myDB.all("SELECT * FROM laptops WHERE id BETWEEN ? AND ?;", [minRange, maxRange]);
    //console.log(JSON.stringify(laptops, null, 4))

    const serviceDirectory = join(process.cwd(), 'public');

    laptops.map((laptop) => {
        const imgNames: string[] = fs.readdirSync(`${serviceDirectory}${laptop.imgUrl}`, "utf-8");
        const images = imgNames.map(img => `${laptop.imgUrl}${img}`);
        laptop.imgUrl = images;
        //console.log(laptop.imgUrl)
    })

    return {
        props: {
            laptops,
        }
    }
}