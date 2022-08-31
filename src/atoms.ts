import { atom } from "recoil";

export const partsAtom = atom<string>({
  key: 'parts',
  default: ''
})

export const partsNameAtom = atom<string | undefined>({
  key: 'partsName',
  default: ''
});

export const partsWeightAtom = atom<number>({
  key: 'partsWeight',
  default: 0
}); 