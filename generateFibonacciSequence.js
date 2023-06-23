/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let num1 = null;
    let num2 = null;

    if(num1===null && num2===null){
        yield 0;
        num1 = 0;
    }

    if(num1===0 && num2===null){
        yield 1;
        num2 = 1;
    }

    while(true){
        yield num1 + num2;
        const sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */