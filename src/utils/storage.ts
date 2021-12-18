function makeStorage<T>(initialValue: T) {
  let data = initialValue;

  return {
    setData: (nextData: T): void => {
      data = nextData;
    },
    getData: (): T => data,
  };
}

type NativeInfo = {
  accessToken: string;
};

export const nativeInfo = makeStorage<NativeInfo>({
  accessToken: '',
});
