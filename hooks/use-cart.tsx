import React from 'react'
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface Product {
    id: number;
    name: string;
    description:string;
    mrp:string;
    sellingPrice:string;
    slug:string;
    images:string;
    categories:string;
    quantity: number; // New field to track quantity
}

interface CartStore {
    items: Product[];
    addItem: (data: Product, quantity?: number, total?:number) => void;
    removeItem:(id:number)=>void;
    removeAll:()=>void;
}

const useCart = create<CartStore>(
    persist<CartStore>((set, get) => ({

        items:[],

        addItem: (data: Product, quantity: number = 1, total:number) => {
            const currentItems = get().items;
            const existingItemIndex = currentItems.findIndex((item) => item.id === data.id);
            
            if (existingItemIndex !== -1) {
                // If item exists, increase its quantity
                set({
                    items: currentItems.map((item, index) =>
                        index === existingItemIndex ? { ...item, quantity:   quantity, total:total  } : item
                    ),
                });
            } else {
                // If item does not exist, add it with quantity 1
                set(state => ({
                    items: [...state.items, { ...data, quantity, total:total }],
                }));
            }
        },

        removeItem: (id: number) => {
            const itemToRemove = get().items.find(item => item.id === id);
            if (itemToRemove) {
                set({
                    items: get().items.filter((item) => item.id !== id),
                });
            }
        },
        removeAll: () => set({ items: [] }),





    }),
    {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })



);

export default useCart



