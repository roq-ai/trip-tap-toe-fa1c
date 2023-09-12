import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PersonalDetailInterface {
  id?: string;
  address: string;
  phone_number: string;
  date_of_birth: any;
  gender: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface PersonalDetailGetQueryInterface extends GetQueryInterface {
  id?: string;
  address?: string;
  phone_number?: string;
  gender?: string;
  user_id?: string;
}
