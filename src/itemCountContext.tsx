import { createContext, useState, ReactNode } from "react";

type Product = {
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
	incrementItemCount: (product: Product) => {},
});

export const ItemCountProvider = ({ children }: { children: ReactNode }) => {
	const [itemCount, setItemCount] = useState(0);
	const [open, setOpen] = useState(false);
	const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

	const incrementItemCount = (product: Product) => {
		console.log("adding to cart: ", product.name);
		if (!product.placedInCart) {
			// item not in cart yet, add it
			setItemCount(itemCount + 1);
            setSelectedProducts(selectedProducts.concat(product))
			product.placedInCart = true;
		}
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
				incrementItemCount,
			}}
		>
			{children}
		</ItemCountContext.Provider>
	);
};

export default ItemCountContext;
