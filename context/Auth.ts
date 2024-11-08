import { createContext, useContext, useEffect, useReducer } from "react";
import { AuthContextData,  AuthState, User } from '../types/types';
import { authReducer } from "@/hooks/reducer";
import * as SecureStore from 'expo-secure-store';
import { setUser } from "@/hooks/actions";


const BASE_URL = 'http://127.0.0.1:8002/api'
async function getToken(key: string) {
    try {
        return await  SecureStore.getItemAsync(key);
    } catch (error) {
        console.log(error);
        return null;
    }
}
async function saveToken(key: string, value: string) {
    try {
        await SecureStore.setItemAsync(key, value);
    } catch (error) {
        console.log(error);
    }
}
async function deleteToken(key: string) {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log(error);
    }
}
const initialState = {
    user: null,
    tokens: null,
    loading: true,
    error: null
}
const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC = ({children}) => {

    const [state, dispatch] = useReducer(authReducer,initialState)

    const handleAuthResponse = async (data: any) =>{
        const {user,tokens} = data;
        await saveToken('accessToken', tokens.access);
        await saveToken('refreshToken', tokens.refresh);
        dispatch(setUser(user));
        dispatch(setTokens(tokens));
    }
   


    return (
        <AuthContext.Provider value={
            user: state.user,
            tokens: state.tokens,
            loading: state.loading,
            error: state.error,
            login,
            logout}
            >
            {children}
        </AuthContext.Provider>
    )
}


export const useauth = () =>{
    const context = useContext(AuthContext);
    if (context === undefined){
        throw new Error('useAuth must be used within an AuthProvider');
    }
}


