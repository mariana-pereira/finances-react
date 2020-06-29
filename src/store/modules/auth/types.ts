export enum AuthTypes {
  AUTH_REQUEST = '@auth/AUTH_REQUEST'
}

export interface AuthData {
  id: number;
}

export interface AuthState {
  readonly token: string;
  readonly signed: boolean;
  readonly loading: boolean;
}
