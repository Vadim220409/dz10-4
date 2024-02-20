// ex 1

function delayedPromise(value, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
}
  
const a = [
    delayedPromise('1', 1000),
    delayedPromise('2', 2000),
    delayedPromise('3', 3000),
    delayedPromise('4', 4000),
    delayedPromise('5', 5000),
];
  
Promise.all(a)
    .then((results) => {
      console.log('Усе виконано:', results);
    })
    .catch((error) => {
      console.error('Помилка:', error);
    });


// ex 2

function randomDelay(value) {
    const minDelay = 1000;
    const maxDelay = 5000;
    return new Promise((resolve) => {
      const randomTime = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
      setTimeout(() => {
        resolve(value);
      }, randomTime);
    });
   }
   
const b = [
    randomDelay('1'),
    randomDelay('2'),
    randomDelay('3'),
    randomDelay('4'),
    randomDelay('5'),
];
   
Promise.race(b)
    .then((result) => {
      console.log('Найшвидший проміс:', result);
    })
    .catch((error) => {
      console.error('Помилка:', error);
    });