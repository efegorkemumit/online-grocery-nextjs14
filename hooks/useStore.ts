import { getToCart } from '@/actions/cart/getCart';
import { create } from 'zustand';

const useStore = create((set)=>({
    items:[],

    fetchItems: async (userId: any, jwt: any) => {
        const data = await getToCart(userId, jwt);
        set({ items: data });
    },

    addItem: (item) => set((state) => ({ items: [...state.items, item] })),


    deleteItem: (itemId) => set((state) => ({
        items: state.items.filter((item) => item.id !== itemId),
      })),



}))

export default useStore;

