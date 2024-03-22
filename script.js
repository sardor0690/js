let son = prompt("Istalgan sonni kiriting:");

while (son === null || son === "" || isNaN(son) || son === 0) {
  son = prompt("Bu son emas. Iltimos, qayta kiriting:");
}

son = Number(son);

if (son % 2 === 0) {
  alert("Bu son juft.");
} else {
  alert("Bu son toq.");
}