export const paymentConvert = ({
  payAmount,
  payType,
}: {
  payAmount: number;
  payType: string;
}) => {
  const convertPayAmount = payAmount / 10000;
  const convertPayType = () => {
    switch (payType) {
      case 'HO':
        return '시급';
      case 'DA':
        return '일급';
      case 'WE':
        return '주급';
      case 'MO':
        return '월급';
      case 'YE':
        return '연봉';
      case 'IR':
        return '무관';
    }
  };
  if (payType == 'IR') {
    return convertPayType();
  } else {
    return `${convertPayType()} ${convertPayAmount}만원`;
  }
};
