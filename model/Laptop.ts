
interface Laptop {
    id: number;
    brand: string;
    name: string;
    display: string;
    processor: string;
    memory: number;
    memory_type: string;
    graphics: string;
    storage: number;
    storage_unit: string;
    imgUrl?: string[];
    price: number;
}

export default Laptop;