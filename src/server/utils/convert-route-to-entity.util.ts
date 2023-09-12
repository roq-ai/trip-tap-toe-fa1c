const mapping: Record<string, string> = {
  'budget-allocations': 'budget_allocation',
  organizations: 'organization',
  'personal-details': 'personal_detail',
  'travel-plans': 'travel_plan',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
