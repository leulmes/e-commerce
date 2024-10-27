import { createContext, useState, ReactNode } from 'react';

const ItemCountContext = createContext({
    itemCount: 0,
    setItemCount: (itemCount: number) => {}
});

export const ItemCountProvider = ({ children }: { children: ReactNode }) => {
    const [itemCount, setItemCount] = useState(0);

    return (
        <ItemCountContext.Provider value={{ itemCount, setItemCount }}>
            {children}
        </ItemCountContext.Provider>
    );
};

export default ItemCountContext;