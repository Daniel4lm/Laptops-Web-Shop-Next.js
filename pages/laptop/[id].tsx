import { openDB } from "@lib/openDB";
import Laptop from "@model/Laptop";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export interface LaptopDetailProps {
    laptop: Laptop | null | undefined;
}
//export type LaptopDetailProps = Laptop;

export default function LaptopDetail({ laptop }: LaptopDetailProps) {

    const router = useRouter();

    if (router.isFallback) {
        return (
            <div>
                <p>Loading ... We are back in a moment :)</p>
            </div>
        )
    } else if(!laptop) {
        return (
            <div>
                <h2>Sorry, laptop can't be found!</h2>
            </div>
        );
    }
    
    const { id, brand, name, display, processor, memory, memory_type, graphics, storage, storage_unit, imgUrl } = laptop;

    return (
        <div>
            <div>{id}</div>
            <div>{brand}</div>
            <div>{name}</div>
            <div>{display}</div>
            <div>{processor}</div>
            <div>{memory}{' '}{memory_type}</div>
            <div>{graphics}</div>
            <div>{storage}{' '}{storage_unit}</div>
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

    // Laptop id parametar
    const lapId = context.params.id;
    const myDB = await openDB(); // Our db connection
    // DB query for one specific laptop
    const laptop = await myDB.get<Laptop | undefined>("SELECT * FROM laptops WHERE id = ?;", [lapId])

    return {
        props: { laptop: laptop || null }
    }
}