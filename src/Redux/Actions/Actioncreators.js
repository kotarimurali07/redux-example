import ACTION from "./Actiontypes";

export const Buybook = (buybook) => {
  return {
    type: ACTION.BUY_BOOK,
    payload: buybook
  };
};
