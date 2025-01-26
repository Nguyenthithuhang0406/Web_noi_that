export interface AccountRegister {
  fullName: string;
  email: string;
  password: string;
  gender: string;
  isAgree: boolean;
}

export interface AccountLogin {
  email: string;
  password: string;
}
