import fs from 'fs';
import { join } from 'path';
import { openDB } from "@lib/openDB";
import Laptop from "@model/Laptop";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
/* material-ui */
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import MemoryIcon from '@material-ui/icons/Memory';
import LaptopMacRoundedIcon from '@material-ui/icons/LaptopMacRounded';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import AddToQueueRoundedIcon from '@material-ui/icons/AddToQueueRounded';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import { useEffect, useState } from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
    },
    gallery: {
        width: '100%',
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%',
        cursor: 'pointer'
    },
    img: {
        width: '20%',
        borderBottom: '4px solid transparent',
        margin: '0 0.2rem',
        cursor: 'pointer',
        "&:hover": {
            //borderRadius: "0.2rem",
            //boxShadow: '0px 0px 2px 0px rgba(0, 112, 243, 0.4)',
            borderColor: 'rgb(0, 112, 243)',
            background: "rgb(7, 177, 77, 0.7)",
        }
    },
    specs: {
        //borderLeft: '1px solid rgba(70, 70, 70, 0.2)',
    },
    title: {
        color: 'rgb(0, 112, 243)',
        width: 'max-content',
        margin: '1rem',
        fontSize: '1.8rem',
        fontWeight: 200
    },
    typo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: 'rgb(70, 70, 70)',
        margin: '0.5rem 0.5rem',
        "& > *": {
            margin: '0 0.4rem',
        }
    },
    price: {
        margin: '0 0.4rem'
    },
}));

export interface LaptopDetailProps {
    laptop: Laptop | null | undefined;
}
//export type LaptopDetailProps = Laptop;

export default function LaptopDetail({ laptop }: LaptopDetailProps) {

    const router = useRouter();
    const classes = useStyles();

    const [curImg, setCurImg] = useState<string>(null);

    useEffect(() => {
        console.log('Slika ', curImg)
    }, [curImg])

    if (router.isFallback) {
        return (
            <div>
                <p>Loading ... We are back in a moment :)</p>
            </div>
        )
    } else if (!laptop) {
        return (
            <div>
                <h2>Sorry, laptop can't be found!</h2>
            </div>
        );
    }

    const { id, brand, name, display, processor, memory, memory_type, graphics, storage, storage_unit, imgUrl } = laptop;

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sm container direction="column" >
                        <Grid item container spacing={2}>
                            <Grid style={{ width: 'inherit', height: 'inherit' }}>
                                <img className={classes.image} alt={name}
                                    src={curImg !== null ? curImg : imgUrl[0]}
                                />
                            </Grid>

                            <Grid item className={classes.gallery} direction="row" justify="center" container spacing={2}>
                                {imgUrl.map(img => (
                                    <img key={img} className={classes.img} alt={img} src={img}
                                        onClick={() => setCurImg(img)}
                                    />
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} container>
                        <Grid xs item container direction="row" justify="center" alignItems="center" spacing={2}>
                            <Grid xs={12} md className={classes.specs} item container direction="column" >
                                <Typography className={classes.title} color="primary">
                                    Specifications
                                </Typography>
                                <Typography className={classes.typo} variant="h6" color="textPrimary" >
                                    <LaptopMacRoundedIcon /> Product name: {brand}{' '}{name}
                                </Typography>
                                <Typography className={classes.typo} variant="body1">
                                    <AddToQueueRoundedIcon /> Display diagonal: <b>{display}</b>
                                </Typography>
                                <Typography className={classes.typo} variant="body1">
                                    <MemoryIcon /> Processor: <b>{processor}</b>
                                </Typography>
                                <Typography className={classes.typo} variant="body1">
                                    <MemoryIcon /> Internal memory: <b>{memory}{' '}{memory_type}</b>
                                </Typography>
                                <Typography className={classes.typo} variant="body1">
                                    <ImageRoundedIcon /> Graphics: <b>{graphics}</b>
                                </Typography>
                                <Typography className={classes.typo} variant="body1" >
                                    <StorageRoundedIcon /> Storage: <b>{storage}{' '}{storage_unit}</b>
                                </Typography>
                                <hr></hr>
                                <Typography variant="body1">
                                    Click the image for Full resolution • JPG/JPEG/PNG
                                </Typography>

                                <Typography className={classes.typo} variant="body2" color="textSecondary">
                                    ID: 00{id}
                                </Typography>
                            </Grid>

                            <Grid  item container justify="center" alignItems="center">
                                <Typography variant="subtitle1">Price</Typography>
                                <Typography className={classes.price} variant="h6">$19.00</Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {

    const myDB = await openDB(); // Our db connection
    const laptopIDs = await myDB.all("SELECT id FROM laptops;");
    const paths = laptopIDs.map((id) => {
        return { params: { id: id.toString() } };
    })

    return {
        fallback: true,
        paths
    }
}

export const getStaticProps: GetStaticProps = async (context) => {

    const serviceDirectory = join(process.cwd(), 'public');
    // Laptop id parametar
    const lapId = context.params.id;
    const myDB = await openDB(); // Our db connection
    // DB query for one specific laptop
    const laptop = await myDB.get<Laptop | undefined>("SELECT * FROM laptops WHERE id = ?;", [lapId]);

    const imgNames: string[] = fs.readdirSync(`${serviceDirectory}${laptop.imgUrl}`, "utf-8");
    const images = imgNames.map(img => `${laptop.imgUrl}${img}`);
    laptop.imgUrl = images;

    return {
        props: { laptop: laptop || null }
    }
}