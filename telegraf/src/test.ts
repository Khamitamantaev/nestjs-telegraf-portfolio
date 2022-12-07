import { Console } from "console";

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x,
        this.y = y
    }

     a() {

    }
}


class D3Point extends Point {
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y)
        this.z = z
    }
}

abstract class Test3 {
    static myMethod() {
        console.log('here!')
    }
}

class Test4 extends Test3 {

}


interface C {
    test: () => number
}

class D implements C {
    test: () => 4;
}