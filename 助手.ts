export type 數=number;
export type 文=string;
export type 文列=文[];
export type 空=void;
export var 文作 = String

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

export const 裂列 = (文: 文, 數?: 數): 文列 => {
  return 文.splitRows(數).map(文作);
}
