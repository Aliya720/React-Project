import { createContext, ReactNode, useContext, useState } from "react";
import { AuthType, UserDataType } from "./auth.types";
import { useNavigate } from "react-router-dom";

export const AuthenticationContext = createContext<AuthType | null>(null);

export const AuthenticationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDataType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = (userData: UserDataType) => {
    setUser(userData);
    setIsAuthenticated(true);
    navigate("/");
    console.log("user signed In");
  };

  const signOut = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, user, signIn, signOut }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthenticationContext);
};
