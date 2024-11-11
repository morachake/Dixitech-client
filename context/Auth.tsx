import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { AuthContextData, AuthState, User } from "../types/types";
import { authReducer } from "@/hooks/reducer";
import * as SecureStore from "expo-secure-store";
import {
  removeTokens,
  removeUser,
  setError,
  setLoading,
  setTokens,
  setUser,
} from "@/hooks/actions";

const BASE_URL = "http://127.0.0.1:8002/api";

async function getToken(key: string): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function saveToken(key: string, value: string): Promise<void> {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.log(error);
  }
}

async function deleteToken(key: string): Promise<void> {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log(error);
  }
}

const initialState: AuthState = {
  user: null,
  tokens: null,
  loading: true,
  error: null,
};

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { user, tokens, loading, error } = state;

  const handleAuthResponse = async (data: any) => {
    const { user, tokens } = data;
    await saveToken("accessToken", tokens.access);
    await saveToken("refreshToken", tokens.refresh);
    dispatch(setUser(user));
    dispatch(setTokens({ access: tokens.access, refresh: tokens.refresh }));
  };

  const signUp = async (userData: User): Promise<void> => {
    dispatch(setLoading(true));
    try {
      const response = await fetch(`${BASE_URL}/service-provider/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Sign up failed");
      await handleAuthResponse(data);
    } catch (error) {
      dispatch(
        setError(error instanceof Error ? error.message : "SignUp failed"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  const signIn = async (email: string, password: string): Promise<void> => {
    dispatch(setLoading(true));
    try {
      const response = await fetch(`${BASE_URL}/auth/jwt/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Login failed");
      await handleAuthResponse(data);
    } catch (error) {
      dispatch(
        setError(error instanceof Error ? error.message : "Login failed"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  const signOut = async (): Promise<void> => {
    dispatch(setLoading(true));
    try {
      await deleteToken("accessToken");
      await deleteToken("refreshToken");
      dispatch(removeUser());
      dispatch(removeTokens());
    } catch (error) {
      dispatch(
        setError(error instanceof Error ? error.message : "Logout failed"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  const googleSignIn = async () => {
    try {
    } catch (error) {
      dispatch(setError("Google login failed"));
    }
  };

  const facebookSignIn = async () => {
    try {
    } catch (error) {
      dispatch(setError("Facebook login failed"));
    }
  };

  const resetPassword = async () => {
    try {
    } catch (error) {
      dispatch(setError("Password reset failed"));
    }
  };

  const updateProfile = async (profileData: Partial<User>) => {
    try {
    } catch (error) {
      dispatch(setError("Profile update failed"));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        tokens,
        loading,
        error,
        signUp,
        signIn,
        signOut,
        googleSignIn,
        facebookSignIn,
        resetPassword,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
