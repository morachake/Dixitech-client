declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
  onPress: any;
}

declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
}
export interface User {
  name: string;
  email: string;
  phone_number: string;
  town: string;
  service_types: string[];
  provider_type: "Individual" | "Entity";
  password: string;
}

export interface AuthState {
  tokens: { access: string; refresh: string } | null;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface AuthContextData {
  user: User | null;
  loading: boolean;
  tokens: { access: string; refresh: string } | null;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (userData: User) => Promise<void>;
  signOut: () => Promise<void>;
  googleSignIn: () => Promise<void>;
  facebookSignIn: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
}
