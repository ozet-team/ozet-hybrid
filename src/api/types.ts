export interface SignInRequest {
  email: string;
}
export interface recruitmentDetail {
  id: string;
  picture: string;
  title: string;
  city: string;
  manager: string;
  callNumber: string;
  deadline: string;
  workTime: string;
  pay: string;
  career: string;
  detailTest: string;
  workSpace: string;
}

export interface employeeTypeItem {
  id: number;
  name: string;
}
export interface ListItemType {
  description: string;
  employeeTypes: employeeTypeItem[];
  expireType: string;
  expiredDatetime: string;
  id: number;
  managerName: string;
  managerPhoneNumber: string;
  payAmount: number;
  payType: string;
  shopLocation: string;
  shopName: string;
  title: string;
  workingHour: string;
}
