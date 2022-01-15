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
      case 'MO':
        return '월급';
      case 'WE':
        return '주급';
      case 'DA':
        return '일급';
    }
  };
  return `${convertPayType()} ${convertPayAmount}만원`;
};
