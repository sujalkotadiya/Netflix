import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null, // Get user from local storage
    signup: async (credentials) => {
        set({ isSigningUp: true });
        try {
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = existingUsers.find(user => user.email === credentials.email);
    
            if (userExists) {
                toast.error("User already exists with this email");
                set({ isSigningUp: false });
                return; 
            }
    
            const newUser = { id: existingUsers.length + 1, ...credentials };
            existingUsers.push(newUser);
            localStorage.setItem('users', JSON.stringify(existingUsers));
    
            set({ user: newUser, isSigningUp: false });
            toast.success("Account created successfully");
        } catch (error) {
            toast.error("Signup failed");
            set({ isSigningUp: false });
            console.log(error);
        }
    },
    
    login: async (credentials) => {
        set({ isLoggingIn: true });
        try {
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const storedUser = existingUsers.find(user => user.email === credentials.email && user.password === credentials.password);
    
            if (storedUser) {
                set({ user: storedUser, isLoggingIn: false });
                toast.success("Login successful"); 
            } else {
                throw new Error("Invalid credentials");
            }
        } catch (error) {
            set({ isLoggingIn: false });
            toast.error(error.message || "Login failed");
        }
    },

    logout: async () => {
        set({ isLoggingOut: true });
        try {
            localStorage.removeItem('user'); 
            set({ user: null, isLoggingOut: false });
            toast.success("Logged out successfully");
        } catch (error) {
            set({ isLoggingOut: false });
            toast.error("Logout failed");
            console.log(error);
        }
    },
}));
