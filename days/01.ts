import '../extension-methods.ts';
import { 數, 文, 文列 } from '../助手.ts';
import { 裂列, 取字, 取後, 文成數, 曰, 餘環 } from '../助手.ts';


//第一問：
export const p1 = (入文: 文): 數 => {
  const 行列: 文列 = 裂列(入文);
  let 零計 = 0;
  let 此位 = 50;
  行列.forEach(文 => {
    曰(文);
    const 方: 文 = 取字(文, 0);
    const 度:數 = 文成數(取後(文, 1));
    if (方 === 'R') { // 右轉
      此位 += 度;
    } else if (方 === 'L') { // 左轉
      此位 -= 度;
    }
    此位 = 餘環(此位, 100);
    if (此位 === 0) {
      零計++;
    }
  })
  return 零計;
}

//第二問：
export const p2 = (入文: 文): 數 => {
  const 行列 = 裂列(入文);
  return 0;
}

