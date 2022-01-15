export interface SignInRequest {
  email: string;
}
export interface recruitmentDetail {
  id: string;
  title: string;
  shopName: string;
  managerName: string;
  managerPhoneNumber: string;
  workingHour: string;
  expireType: string;
  payType: string;
  payAmount: number;
  expiredDatetime: boolean; //만료날짜
  employeeTypes: { id: number; name: string }[];
  description: string;
  detailImage: string;
  shopLocation: string;
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
