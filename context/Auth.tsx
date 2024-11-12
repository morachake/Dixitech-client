import React, {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useCallback,
} from "react";
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

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    tokens: null,
    loading: false,
    error: null,
  });

  const { user, tokens, loading, error } = state;

  const handleAuthResponse = useCallback(
    async (data: {
      user: User;
      tokens: { access: string; refresh: string };
    }) => {
      const { user, tokens } = data;
      await SecureStore.setItemAsync("accessToken", tokens.access);
      await SecureStore.setItemAsync("refreshToken", tokens.refresh);
      dispatch(setUser(user));
      dispatch(setTokens(tokens));
    },
    [],
  );

  const handleApiError = (data: any): string => {
    if (typeof data === "object" && data !== null) {
      return Object.entries(data)
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            return `${key}: ${value.join(", ")}`;
          } else if (typeof value === "object" && value !== null) {
            return `${key}: ${handleApiError(value)}`;
          }
          return `${key}: ${value}`;
        })
        .join(", ");
    }
    return String(data);
  };

  const signUp = useCallback(
    async (userData: User): Promise<void> => {
      dispatch(setLoading(true));
      try {
        const response = await fetch(`${BASE_URL}/service-provider/register/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });
        const data = await response.json();
        console.log("signup response", data);

        if (!response.ok) {
          throw new Error(handleApiError(data));
        }

        await handleAuthResponse(data);
      } catch (error) {
        console.error("Sign up error:", error);
        dispatch(
          setError(error instanceof Error ? error.message : "Sign up failed"),
        );
        throw error; // Re-throw the error so it can be caught in the component
      } finally {
        dispatch(setLoading(false));
      }
    },
    [handleAuthResponse],
  );

  const signIn = useCallback(
    async (email: string, password: string): Promise<void> => {
      dispatch(setLoading(true));
      try {
        const response = await fetch(`${BASE_URL}/auth/jwt/create/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(handleApiError(data));
        }

        await handleAuthResponse(data);
      } catch (error) {
        console.error("Sign in error:", error);
        dispatch(
          setError(error instanceof Error ? error.message : "Login failed"),
        );
        throw error;
      } finally {
        dispatch(setLoading(false));
      }
    },
    [handleAuthResponse],
  );

  const signOut = useCallback(async (): Promise<void> => {
    dispatch(setLoading(true));
    try {
      await SecureStore.deleteItemAsync("accessToken");
      await SecureStore.deleteItemAsync("refreshToken");
      dispatch(removeUser());
      dispatch(removeTokens());
    } catch (error) {
      console.error("Sign out error:", error);
      dispatch(
        setError(error instanceof Error ? error.message : "Logout failed"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  }, []);

  const googleSignIn = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      // Implement Google Sign-In logic here
      throw new Error("Google login not implemented");
    } catch (error) {
      console.error("Google sign in error:", error);
      dispatch(
        setError(
          error instanceof Error ? error.message : "Google login failed",
        ),
      );
    } finally {
      dispatch(setLoading(false));
    }
  }, []);

  const facebookSignIn = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      // Implement Facebook Sign-In logic here
      throw new Error("Facebook login not implemented");
    } catch (error) {
      console.error("Facebook sign in error:", error);
      dispatch(
        setError(
          error instanceof Error ? error.message : "Facebook login failed",
        ),
      );
    } finally {
      dispatch(setLoading(false));
    }
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    dispatch(setLoading(true));
    try {
      const response = await fetch(`${BASE_URL}/auth/password/reset/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(handleApiError(data));
      }
      // Handle successful password reset (e.g., show a success message)
    } catch (error) {
      console.error("Password reset error:", error);
      dispatch(
        setError(
          error instanceof Error ? error.message : "Password reset failed",
        ),
      );
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }, []);

  const updateProfile = useCallback(
    async (profileData: Partial<User>) => {
      dispatch(setLoading(true));
      try {
        const accessToken = await SecureStore.getItemAsync("accessToken");
        if (!accessToken) throw new Error("No access token found");

        const response = await fetch(`${BASE_URL}/user/profile/`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(profileData),
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(handleApiError(data));
        }
        dispatch(setUser({ ...user, ...data }));
      } catch (error) {
        console.error("Profile update error:", error);
        dispatch(
          setError(
            error instanceof Error ? error.message : "Profile update failed",
          ),
        );
        throw error;
      } finally {
        dispatch(setLoading(false));
      }
    },
    [user],
  );

  const contextValue = {
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
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
