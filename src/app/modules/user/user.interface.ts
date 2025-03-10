// export type TUser = {
//   // id: string;
//   password: string;
//   needsPasswordChange: boolean;
//   role: 'admin' | 'traveller' | 'sender';
//   status: 'in-progress' | 'blocked';
//   isDeleted: boolean;
// };

export type TUser = {
  fullName: string;
  email: string;
  phoneNumber?: string;
  profilePicture?: string;
  password: string;
  isVerified: boolean;
  role: 'user' | 'admin' | 'moderator';
  createdAt: Date;
  updatedAt: Date;
};

// export interface User {
//   id: string;
//   fullName: string;
//   email: string;
//   phoneNumber?: string;
//   profilePicture?: string;
//   password: string;
//   isVerified: boolean;
//   role: 'user' | 'admin' | 'traveller';
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface AuthResponse {
//   user: User;
//   token: string;
// }

// export interface LoginRequest {
//   email: string;
//   password: string;
// }

// export interface RegisterRequest {
//   fullName: string;
//   email: string;
//   password: string;
//   phoneNumber?: string;
// }

// export interface UpdateUserRequest {
//   fullName?: string;
//   email?: string;
//   phoneNumber?: string;
//   profilePicture?: string;
// }
