import { create } from 'zustand';

const useAuthStore = create((set) => ({
    email: '',
    username: '',
    password: '',
    loader: false,
    setEmail: (email) => set({ email }),
    setUsername: (username) => set({ username }),
    setPassword: (password) => set({ password }),
    setLoader: (loader) => set({ loader }),
  }));
  
  export default useAuthStore;
