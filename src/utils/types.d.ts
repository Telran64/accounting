export interface UserData {
    login: string;
    firstName: string;
    lastName: string;
}

export interface UserProfile extends UserData {
    roles: string[];
}

export interface UserRegister extends UserData {
    password: string;
}

export type UserUpdate = Omit<UserData, 'login'>;