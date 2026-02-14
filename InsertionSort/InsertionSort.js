// increasing order
function insertionSortAscendingOrder(array) {
    if (array === undefined || array.length === 1) {
        return;
    }
    const length = array.length;
    for (let i = 1; i < length; i++) {
        const key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
}

function insertionSortDescendingOrder(array) {
    if (array === undefined || array.length === 1) {
        return;
    }
    const length = array.length;
    for (let i = 1; i < length; i++) {
        const key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] < key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
}

function main() {
    const array = [5, 4, 10, 1, 6, 2];
    insertionSortAscendingOrder(array);
    console.log("After sorting array as ascending order:", array);
    insertionSortDescendingOrder(array);
    console.log("After sorting array as descending order:", array);
}

main();