export function addToCartFnc(data: any, callBack: any) {
  callBack(data);
}
export function removeToCartFnc({ id }: { id: string }, callBack: any) {
  callBack(id);
}
