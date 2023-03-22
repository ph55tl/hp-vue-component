/**
 * 节流
 * @param fn
 * @param delay
 * @returns
 */
export const throttled = (fn: any, delay: number) => {
  let timer: any = null;
  let starttime = Date.now();
  return (...params: any) => {
    const curTime = Date.now(); // 当前时间
    const remaining = delay - (curTime - starttime); // 从上一次到现在，还剩下多少多余时间
    clearTimeout(timer);
    if (remaining <= 0) {
      fn(...params);
      starttime = Date.now();
    } else {
      timer = setTimeout(fn, remaining);
    }
  };
};
