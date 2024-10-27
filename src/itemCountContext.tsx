import { createContext, useState, ReactNode } from 'react';

const ItemCountContext = createContext({
    itemCount: 0,
    setItemCount: (itemCount: number) => {},
    open: false,
    setOpen: (open: boolean) => {}
});

export const ItemCountProvider = ({ children }: { children: ReactNode }) => {
    const [itemCount, setItemCount] = useState(0);
    const [open, setOpen] = useState(false);

    return (
        <ItemCountContext.Provider value={{ itemCount, setItemCount, open, setOpen }}>
            {children}
        </ItemCountContext.Provider>
    );
};

export default ItemCountContext;