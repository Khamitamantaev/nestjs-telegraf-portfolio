// class Point {
//     x: number;
//     y: number;

//     constructor(x: number, y: number) {
//         this.x = x,
//         this.y = y
//     }

//      a() {

//     }
// }


// class D3Point extends Point {
//     z: number;
//     constructor(x: number, y: number, z: number) {
//         super(x, y)
//         this.z = z
//     }
// }

// abstract class Test3 {
//     static myMethod() {
//         console.log('here!')
//     }
// }

// class Test4 extends Test3 {

// }


// interface C {
//     test: () => number
// }

// class D implements C {
//     test: () => 4;
// }


// enum Direction {
//     Up = 'UP',
//     Down = 'DOWN',
//     Left = 'LEFT',
//     Right = 'RIGHT'
// }

// // Гетерогенный enum
// enum Desision {
//     Yes = 1,
//     No = 'NO'
// }

// // Generics 
// function logTime<T>(num: T): T {
//     console.log(new Date())
//     return num
// }

// function logTime2<T>(num: T): T {
//     if(typeof num == 'string') {
//         console.log(num.toUpperCase())
//     }
//     return num
// }

// const resultNumber = logTime<number>(5)
// const resultString = logTime2<string>('here!')
// console.log(resultNumber)
// console.log(resultString)

interface TimeStamp {
    stamp: number
}

function longTimeStamp<T extends TimeStamp> (num: T): T {
    return num
}

const result = longTimeStamp({ stamp: 4})
console.log(result)