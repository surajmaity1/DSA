/*
2.1-5 Question of Introduction to Algorithm Book (Page - 47) - 
Consider the problem of adding two *n*-bit binary integers *a* and *b*, stored in two *n*-element arrays `A[0 : n − 1]` and `B[0 : n − 1]`, where each element is either 0 or 1,  
> a = ∑ᵢ₌₀ⁿ⁻¹ A[i] ⋅ 2ⁱ  
> b = ∑ᵢ₌₀ⁿ⁻¹ B[i] ⋅ 2ⁱ  

The sum `c = a + b` of the two integers should be stored in binary form in an `(n + 1)`-element array `C[0 : n]`, where  

> c = ∑ᵢ₌₀ⁿ C[i] ⋅ 2ⁱ  
 */

export function binaryAddition(array1, array2) {
    const length = Math.max(array1.length, array2.length) + 1;
    const result = new Array(length).fill(0);

    for (let i = 0; i < length; i++) {
        const item1 = array1[i] || 0;
        const item2 = array2[i] || 0;

        const sum = item1 + item2 + result[i];
        result[i] = sum % 2;
        result[i + 1] = Math.trunc(sum / 2);
    }
    // console.log(result.reverse().join(""));
    // const res = parseInt(result.reverse().join(""), 2);
    // console.log(parseInt(array1.join(""), 2) + " + ", parseInt(array2.join(""), 2) + " = ", res);
    // console.log(res);
    return result.reverse();
}

export function binaryToDecimal(array) {
    if (!array) {
        return 0;
    }

    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i] << i;
    }

    // Another way to convert binary to decimal

    // let base = 1;
    // for (let index = 0; index < array.length; index++) {
    //     if (array[index] === 1) {
    //         result += base;
    //     }
    //     base *= 2;
    // }

    return result;
}

binaryAddition([1, 0, 1], [0, 1, 1]);
