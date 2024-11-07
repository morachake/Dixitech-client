import { User } from "@/types/types";

export type AuthAction =
  | { type: "SET_USER"; payload: User }
  | { type: "SIGN_OUT" }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string };
export const setUser = (user: User): AuthAction => ({
  type: "SET_USER",
  payload: user,
});

export const removeUser = (): AuthAction => ({
  type: "SIGN_OUT",
});

export const setLoading = (loading: boolean): AuthAction => ({
  type: "SET_LOADING",
  payload: loading,
});

export const setError = (error: string): AuthAction => ({
  type: "SET_ERROR",
  payload: error,
});
