const fruits = ['яблуко', 'банан', 'груша', 'киві'];

fruits.shift();
fruits.pop();
fruits.unshift('ананас');
fruits.push('манго');
fruits.splice(2, 1);
fruits.splice(2, 0, 'виноград', 'персик', 'ананас');
var message = 'Сьогодні в моєму кошику з фруктами є: ' + fruits.join(', ') + '.';
console.log(message);