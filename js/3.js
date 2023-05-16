const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor(styles.length / 2)] = 'Класика';
const firstElement = styles.shift();
console.log('Видалений перший елемент:', firstElement);
styles.unshift('Реп', 'Реггі');
console.log('Масив styles:', styles);