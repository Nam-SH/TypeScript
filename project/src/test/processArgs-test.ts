// 반환 값 확인
// process.argv.forEach((val: string, index: number) => {
//   console.log(index + ": " + val);
// });

import { getFileNameAndNumber } from "../utils/getFileNameAndNumber";

const [filename, numberOfFakeItems] = getFileNameAndNumber("defualt...", 10);
console.log(filename, numberOfFakeItems);

/* 
$ tn processArgs-test.ts
defualt... 10

$ tn processArgs-test.ts inputData
inputData 10

$ tn processArgs-test.ts inputData 99999
inputData 99999
*/
