// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let value = 0;
//         value++;
//         console.log(value)
//         resolve(value);
//     }, 2000)
// }).then((value) => {
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             value++;
//             console.log(value);
//             resolve(value);
//
//         }, 1000)
//     })
// }).then((value) => {
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             value++;
//             console.log(value);
//             resolve(value);
//
//         }, 1000)
//     })
// })

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value=>value.json())
//     .then(value=> console.log(value))



