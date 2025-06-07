import { atom, selector } from 'recoil';

export const counterAtom = atom({
  key: 'counter',
  default: 0,
});

//these lines could be written in a separate file to use selector
export const evenSelector = selector({
  key: "isEvenSelector",
  get: function({ get }) {
    const currentCount = get(counterAtom);
    const isEven = (currentCount % 2 == 0);
    return isEven;
  }
})