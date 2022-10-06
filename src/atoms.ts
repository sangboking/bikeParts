import { atom } from "recoil";

export const partsAtom = atom<string>({
  key: 'parts',
  default: ''
})

export const partsNameAtom = atom<string | undefined>({
  key: 'partsName',
  default: ''
});

export const shifterWeightAtom = atom<number>({
  key: 'shifterWeight',
  default: 0
});

export const rearDWeightAtom = atom<number>({
  key: 'rearDWeight',
  default: 0
}); 

export const frontDWeightAtom = atom<number>({
  key: 'frontDWeight',
  default: 0
}); 

export const crankWeightAtom = atom<number>({
  key: 'crankWeight',
  default: 0
}); 

export const cassWeightAtom = atom<number>({
  key: 'cassWeight',
  default: 0
}); 

export const chainWeightAtom = atom<number>({
  key: 'chainWeight',
  default: 0
}); 

export const brakeWeightAtom = atom<number>({
  key: 'brakeWeight',
  default: 0
}); 

