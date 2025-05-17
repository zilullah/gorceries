import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";

interface AppContextType {
  navigate: ReturnType<typeof useNavigate>;
  user: any;
  isSeller: boolean;
  showUserLogin: boolean;
  product: [];
  setUser: React.Dispatch<React.SetStateAction<any>>;
  setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
  setShowUserLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setProduc: React.Dispatch<React.SetStateAction<[]>>;
  cartItems: any;
  setCartItems: React.Dispatch<React.SetStateAction<any>>;
}

export const AppContext = createContext<AppContextType | null>(null);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  const fetchProduct = async () => {
    setProducts(dummyProducts);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const value = {
    navigate,
    user,
    isSeller,
    products,
    setIsSeller,
    setUser,
    showUserLogin,
    setShowUserLogin,
    cartItems,
    setCartItems,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
