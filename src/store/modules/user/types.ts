export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  _id?: string;
  username?: string;
  email?: string;
  avatar?: string;
  avatar_url?: string;
  bio?: string;
  created?: string;
  accountId?: string;
  role: RoleType;
}
