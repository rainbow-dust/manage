export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  _id?: string;
  name?: string;
  username?: string;
  avatar?: string;
  avatar_url?: string;
  job?: string;
  organization?: string;
  location?: string;
  email?: string;
  introduction?: string;
  personalWebsite?: string;
  jobName?: string;
  organizationName?: string;
  locationName?: string;
  phone?: string;
  registrationDate?: string;
  accountId?: string;
  certification?: number;
  role: RoleType;
}
