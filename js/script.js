//1

const delayedPromise = (value, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {resolve(value);
        });
    });
};

const promises = [
    delayedPromise('проміс 1', 1000),
    delayedPromise('проміс 2', 2000),
    delayedPromise('проміс 3', 1500),
    delayedPromise('проміс 4', 500),
    delayedPromise('проміс 5', 1200),
];

Promise.all(promises).then(results =>{
    console.log('all promises have been done', results);
})
.catch(error=> {
    console.log('Error while trying to retrieve promises', error);
});


//2
//
// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };
//
// const randomDelay = (value) => {
//     const delay = randomIntegerFromInterval(1000, 5000);
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(value);
//         }, delay);
//     });
// };
//
// const promises = [
//     randomDelay('Проміс 1'),
//     randomDelay('Проміс 2'),
//     randomDelay('Проміс 3'),
//     randomDelay('Проміс 4'),
//     randomDelay('Проміс 5')
// ];
//
// Promise.race(promises)
//     .then(result => {
//         console.log('Найшвидший проміс виконався:', result);
//     })
//     .catch(error => {
//         console.error('Помилка під час виконання промісу:', error);
//     });
