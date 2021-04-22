import { GetStaticPaths } from "next";
import Laptops, { getStaticProps } from ".";
import { openDB } from "@lib/openDB";

export default Laptops;
export { getStaticProps };

export const getStaticPaths: GetStaticPaths = async () => {

    const myDB = await openDB();
    const { total } = await myDB.get("SELECT COUNT(*) AS total FROM laptops ;");
    const numOfPages: number = (Math.ceil(total / 5.0) );

    const paths = Array(numOfPages - 1).fill('').map((_, index) => {
        return { params: { curPage: (index + 1).toString() } }
    })

    //console.log(JSON.stringify(paths, null, 4))

    return {
        fallback: false,
        paths
    }
}