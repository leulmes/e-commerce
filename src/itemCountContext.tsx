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
});

export const ItemCountProvider = ({ children }: { children: ReactNode }) => {
	const [itemCount, setItemCount] = useState(0);
	const [open, setOpen] = useState(false);
	const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

	const incrementItem = (product: Product) => {
		console.log("adding to cart: ", product.name);
		if (!product.placedInCart) {
			// item not in cart yet, add it
			setItemCount(itemCount + 1);
			setSelectedProducts(selectedProducts.concat(product));
			product.placedInCart = true;
		}
	};
	const decrementItem = (product: Product) => {
		console.log("removing from cart: ", product.name);

		setItemCount(itemCount - product.quantity);
		setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
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
			}}
		>
			{children}
		</ItemCountContext.Provider>
	);
};

export default ItemCountContext;
