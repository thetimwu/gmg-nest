export interface Employee {
  EmployeeID: number;
  FirstName: string;
  LastName: string;
  AddressLine1: string;
  AddressLine2: string;
  City?: string;
  PostCode?: string;
  DateOfBirth?: Date;
  Tradesman?: boolean;
  JobID?: number;
  NINumber?: string;
  Mobile?: string;
  EmergContact?: string;
  EmergPhone?: string;
  Verified?: boolean;
  StartDate?: Date;
  LeavingDate?: Date;
  Current?: boolean;
  Notes?: string;
}
