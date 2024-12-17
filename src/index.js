import * as R from "ramda";

// 函数组合示例: 处理字符串
const toUpper = (str) => str.toUpperCase();
const addGreeting = (str) => `Hello, ${str}!`;
const addExcitement = (str) => `${str}!!!`;

// 使用 compose 从右到左组合函数
const greetLoudly = R.compose(addExcitement, addGreeting, toUpper);

// 使用组合后的函数
const result = greetLoudly("world"); // 返回: "HELLO, WORLD!!!!"
console.log("引入文件测试数据 => ", result);

export { greetLoudly };
