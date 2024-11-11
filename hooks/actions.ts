import { User } from "@/types/types";

export type AuthAction =
  | { type: "SET_USER"; payload: User }
  | { type: "REMOVE_USER" }
  | { type: "SET_TOKENS"; payload: any }
  | { type: "REMOVE_TOKENS" }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string }
  | { type: "CLEAR_ERROR" }
  | { type: "UPDATE_PROFILE"; payload: Partial<User> };

export const setUser = (user: User): AuthAction => ({
  type: "SET_USER",
  payload: user,
});

export const removeUser = (): AuthAction => ({
  type: "REMOVE_USER",
});

export const setTokens = (tokens: {
  access: string;
  refresh: string;
}): AuthAction => ({
  type: "SET_TOKENS",
  payload: tokens,
});

export const removeTokens = (): AuthAction => ({
  type: "REMOVE_TOKENS",
});
export const setLoading = (loading: boolean): AuthAction => ({
  type: "SET_LOADING",
  payload: loading,
});

export const setError = (error: string): AuthAction => ({
  type: "SET_ERROR",
  payload: error,
});

export const clearError = () => ({
  type: "CLEAR_ERROR",
});
