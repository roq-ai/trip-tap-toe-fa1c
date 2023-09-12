import { BudgetAllocationInterface } from 'interfaces/budget-allocation';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TravelPlanInterface {
  id?: string;
  destination: string;
  start_date: any;
  end_date: any;
  budget: number;
  status: string;
  organization_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  budget_allocation?: BudgetAllocationInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    budget_allocation?: number;
  };
}

export interface TravelPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
  destination?: string;
  status?: string;
  organization_id?: string;
  user_id?: string;
}
