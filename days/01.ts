import '../extension-methods.ts';

type 數=number;
type 文=string;
type 文列=文[];
type 空=void;
var 文作 = String

//第一問：
export const p1 = (入文: 文): 數 => {
  const 行列: 文列 = 入文.splitRows().map(文作);
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
  const 行列 = 入文.splitRows().map(文作);
  return 0;
}

export const 餘環 = (數: 數, 限: 數): 數 => {
  return ((數 % 限) + 限) % 限;
}

export const 曰 = (文: 文): 空 => {
  console.log(文);
}

export const 文成數 = (文: 文): 數 => {
  return parseInt(文, 10);
}

export const 取字 = (文: 文, 位: 數): 文 => {
  return 文.charAt(位);
}

export const 取後 = (文: 文, 位: 數): 文 => {
  return 文.slice(位);
}