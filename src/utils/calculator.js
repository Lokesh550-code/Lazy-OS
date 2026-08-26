export const calculate = (num1, num2, operator) => {
  num1 = Number(num1);
  num2 = Number(num2);

  if(operator === "+") {
    return num1 + num2;
  } else if(operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  }
};
