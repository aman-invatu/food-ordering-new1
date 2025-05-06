
import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/types";
import { toast } from "@/hooks/use-toast";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthContextProps extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Mock users for demo
const mockUsers: User[] = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
  },
];

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = () => {
      const savedUser = localStorage.getItem("foodUser");
      if (savedUser) {
        try {
          const user = JSON.parse(savedUser);
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          console.error("Failed to parse saved user:", error);
          setAuthState({ ...initialState, isLoading: false });
        }
      } else {
        setAuthState({ ...initialState, isLoading: false });
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // For demo purposes, any email/password works if the email exists in mockUsers
      // In a real app, you'd verify credentials via API
      const user = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (user) {
        const loggedInUser = { ...user };
        setAuthState({
          user: loggedInUser,
          isAuthenticated: true,
          isLoading: false,
        });
        localStorage.setItem("foodUser", JSON.stringify(loggedInUser));
        
        toast({
          title: "Login successful",
          description: `Welcome back, ${loggedInUser.name}!`,
          variant: "default",
        });
        
        return true;
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Check if email is already registered
      const existingUser = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (existingUser) {
        toast({
          title: "Registration failed",
          description: "This email is already registered",
          variant: "destructive",
        });
        return false;
      }
      
      // In a real app, you'd create the user via API
      const newUser: User = {
        id: `user_${Date.now()}`,
        name,
        email,
      };
      
      // Add to mock users
      mockUsers.push(newUser);
      
      // Auto-login after registration
      setAuthState({
        user: newUser,
        isAuthenticated: true,
        isLoading: false,
      });
      localStorage.setItem("foodUser", JSON.stringify(newUser));
      
      toast({
        title: "Registration successful",
        description: `Welcome, ${name}!`,
        variant: "default",
      });
      
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration failed",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("foodUser");
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
      variant: "default",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
