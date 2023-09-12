import { TravelPlanInterface } from 'interfaces/travel-plan';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BudgetAllocationInterface {
  id?: string;
  amount: number;
  description?: string;
  travel_plan_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  travel_plan?: TravelPlanInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BudgetAllocationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  travel_plan_id?: string;
  user_id?: string;
}
