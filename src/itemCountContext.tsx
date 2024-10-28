import { createContext, useState, ReactNode } from "react";

export type Product = {
	id: number;
	name: string;
	href: string;
	color: string;
	price: number;
	quantity: number;
	imageSrc: string;
	imageAlt: string;
	placedInCart: boolean;
};

const ItemCountContext = createContext({
	itemCount: 0,
	setItemCount: (itemCount: number) => {},
	open: false,
	setOpen: (open: boolean) => {},
	selectedProducts: [] as Product[],
	setSelectedProducts: (products: Product[]) => {},
	incrementItem: (product: Product) => {},
	decrementItem: (product: Product) => {},
    totalPrice: 0,
    setTotalPrice: (totalPrice: number) => {}
});

export const ItemCountProvider = ({ children }: { children: ReactNode }) => {
	const [itemCount, setItemCount] = useState(0);
	const [open, setOpen] = useState(false);
	const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);
    
	const incrementItem = (product: Product) => {
		console.log("adding to cart: ", product.name);
		if (!product.placedInCart) {
			// item not in cart yet, add it
			setItemCount(itemCount + 1);
			setSelectedProducts(selectedProducts.concat(product));
            setTotalPrice(totalPrice + product.price); // don't need to multiply by quantity since product will be added once from btn
			product.placedInCart = true;
		}
	};
	const decrementItem = (product: Product) => {
		console.log("removing from cart: ", product.name);

		setItemCount(itemCount - product.quantity);
		setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
        // updated total price
        setTotalPrice(totalPrice - (product.price * product.quantity));
		product.placedInCart = false;
	};

	return (
		<ItemCountContext.Provider
			value={{
				itemCount,
				setItemCount,
				open,
				setOpen,
				selectedProducts,
				setSelectedProducts,
				incrementItem,
				decrementItem,
                totalPrice, setTotalPrice
			}}
		>
			{children}
		</ItemCountContext.Provider>
	);
};

export default ItemCountContext;
