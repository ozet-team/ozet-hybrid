export interface SignInRequest {
  email: string;
}
export interface recruitmentDetailDataType {
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
export type BookmarkDataResponse = {
  id: string;
  announcement: {
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
    imageUrl?: string;
  };
};

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
  imageUrl: string;
}
export interface bridgeApplyDataType {
  name: string;
  shopName: string;
  announcementTitle: string;
  resumeURL: string;
  phoneNumber: string;
}
export interface userMeDataType {
  id: number;
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
  birthday: string;
  gender: string;
  introduce: string;
  address: string;
  profileImage: string;
  policyForTermsAgreed: string;
  policyForPrivacyAgreed: string;
  snsList: [
    {
      username: string;
      url: string;
    },
  ];
}
