import { createContext, ReactElement, useState, useEffect } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initialState: ProductType[] = [];

export type UseProductsContextType = { products: ProductType[] };

const initialContextState: UseProductsContextType = {products: []};

const ProductsContext = createContext<UseProductsContextType>(initialContextState);

type ChildrenType = {children?: ReactElement | ReactElement[]};

export const ProductsProvider = ({children}: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initialState);

    useEffect(() => {
        const fetchProducts = async (): Promise<ProductType[]> => {
            // Fetch data locally from JSON server during development
            const data = await fetch('http://localhost:4000/products').then(response => {
                return response.json();
            }).catch(error => {
                if(error instanceof Error) console.error(error.message);
            });
            return data;
        }

        fetchProducts().then(products => setProducts(products));
    }, []);

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;
