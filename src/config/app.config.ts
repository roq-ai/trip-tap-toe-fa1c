interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Travel Manager', 'Employee', 'Finance Manager'],
  tenantName: 'Organization',
  applicationName: 'Trip Tap Toe  ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Organizations',
    'Invite and remove users to and from the Organization',
    'Assign roles to users in the Organization',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/a439e439-7cfa-4bba-a9f7-739b7113b9d0',
};
