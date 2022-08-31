export const headerData : string[] = [
  '',
  'Shifters',
  'Rear D.',
  'Front D.',
  'Cranks',
  'Cass',
  'Chain',
  'Brakes',
  'Total'
];

export interface IBikePartsData {
  name : string,
  shifters : number,
  rearD : number,
  frontD : number,
  cranks : number,
  cass : number,
  chain : number,
  brakes : number,
  total : number
}

export const rimMechanicalShiftData : IBikePartsData[] = [
  {
    name:'Dura-Ace R9100',
    shifters:365,
    rearD:158,
    frontD:70,
    cranks:614,
    cass:193,
    chain:247,
    brakes:326,
    total:1973
  },
  {
    name:'Ultegra R8000',
    shifters:438,
    rearD:200,
    frontD:92,
    cranks:674,
    cass:251,
    chain:257,
    brakes:360,
    total:2272
  },
  {
    name:'105 R7000',
    shifters:500,
    rearD:225,
    frontD:95,
    cranks:713,
    cass:284,
    chain:257,
    brakes:379,
    total:2453
  },
  {
    name:'Dura-Ace 9000',
    shifters:363,
    rearD:160,
    frontD:60,
    cranks:636,
    cass:192,
    chain:249,
    brakes:294,
    total:1960
  },
  {
    name:'Ultegra 6800',
    shifters:419,
    rearD:193,
    frontD:86,
    cranks:694,
    cass:251,
    chain:260,
    brakes:340,
    total:2243
  },
  {
    name:'105 5800',
    shifters:486,
    rearD:234,
    frontD:89,
    cranks:736,
    cass:284,
    chain:260,
    brakes:340,
    total:2467
  },
  {
    name: 'Red 22',
    shifters:280,
    rearD:145,
    frontD:69,
    cranks:609,
    cass:167,
    chain:246,
    brakes:262,
    total:1778
  },
  {
    name:'Force 22',
    shifters:307,
    rearD:178,
    frontD:79,
    cranks:618,
    cass:266,
    chain:220,
    brakes:326,
    total:2054
  },
  {
    name:'Super Record 12',
    shifters:339,
    rearD:181,
    frontD:79,
    cranks:618,
    cass:266,
    chain:220,
    brakes:311,
    total:2014
  },
  {
    name:'Recored 12',
    shifters:343,
    rearD:216,
    frontD:81,
    cranks:708,
    cass:266,
    chain:220,
    brakes:326,
    total:2160
  },
  {
    name:'Chours 12',
    shifters:364,
    rearD:215,
    frontD:82,
    cranks:727,
    cass:337,
    chain:247,
    brakes:318,
    total:2290
  },
  {
    name:'Super Record 11',
    shifters:342,
    rearD:166,
    frontD:71,
    cranks:603,
    cass:177,
    chain:239,
    brakes:297,
    total:1895
  },
  {
    name:'Record 11',
    shifters:348,
    rearD:170,
    frontD:75,
    cranks:651,
    cass:201,
    chain:239,
    brakes:309,
    total:1993
  },
  {
    name:'Chours 11',
    shifters:350,
    rearD:183,
    frontD:76,
    cranks:683,
    cass:230,
    chain:250,
    brakes:302,
    total:2074
  },
  {
    name:'Centaur 11',
    shifters:373,
    rearD:230,
    frontD:103,
    cranks:875,
    cass:291,
    chain:256,
    brakes:325,
    total:2453
  },
];
