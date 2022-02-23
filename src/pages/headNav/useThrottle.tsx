const useThrottle = (fun: Function, delay: number) => {
  let time1: any = null;
  return () => {
    if (time1) {
      return;
    }
    time1 = setTimeout(() => {
      fun();
      time1 = null;
    }, delay);
  };
};
export default useThrottle;
