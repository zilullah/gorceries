import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

interface AppContextType {
  navigate: ReturnType<typeof useNavigate>;
  user: undefined;
  isSeller: boolean;
  showUserLogin: boolean;
  product: [];
  setUser: React.Dispatch<React.SetStateAction<undefined>>;
  setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
  setShowUserLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setProduc: React.Dispatch<React.SetStateAction<[]>>;
  cartItems: undefined;
  setCartItems: React.Dispatch<React.SetStateAction<undefined>>;
  showLoginForm: boolean;
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
  searchProduct: string;
  setSearhProduct: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

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
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState<Record<string, number>>({});
  const [searchProduct, setSearchProduct] = useState<string>("");

  const fetchProduct = async () => {
    setProducts(dummyProducts);
  };

  const addProducts = (itemID: string) => {
    const tempData = structuredClone(cartItems);
    if (tempData[itemID]) {
      tempData[itemID] += 1;
    } else {
      tempData[itemID] = 1;
    }
    setCartItems(tempData);
    toast.success("Successfully Added!");
  };

  const updateProducts = (itemID: string, quantity: number) => {
    const tempData = structuredClone(cartItems);
    tempData[itemID] = quantity;
    setCartItems(tempData);
    toast.success("Successfully Updated!");
  };

  const removeProduct = (itemID: string) => {
    const tempData = structuredClone(cartItems);
    if (tempData[itemID] === 0) {
      delete tempData[itemID];
    } else {
      tempData[itemID] -= 1;
    }
    setCartItems(tempData);
    toast.success("Successfully Remove!");
  };

  const handleLoginForm = () => setShowLoginForm(!showLoginForm);

  const productSearch = useMemo(() => {
    if (searchProduct !== "") {
      const item = products.filter(
        (items: undefined) =>
          items.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
          items.category.toLowerCase().includes(searchProduct.toLowerCase())
      );
      console.log(item);
      return item;
    } else {
      return products;
    }
  }, [products, searchProduct]);

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
    addProducts,
    updateProducts,
    removeProduct,
    handleLoginForm,
    showLoginForm,
    productSearch,
    setSearchProduct,
    searchProduct,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
