package org.surajmyt.ArrayProgram;

public class ArrayOperation {
    private int[] array = null;
    private int totalElements = 0;

    ArrayOperation() {

    }

    ArrayOperation(int size) {
        if (size > 0) {
            this.array = new int[size];
        }
    }

    public void display () {

        if (!isValidArray()) {
            return;
        }
        System.out.print("\nArrays: ");

        if (this.totalElements == 0) {
            System.out.print("Empty");
            return;
        }

        for (int index = 0; index < this.totalElements; index++) {
            System.out.printf("%d ", this.array[index]);
        }
        System.out.println();
    }

    public void append (int item) {
        if (this.array.length > this.totalElements) {
            this.array[this.totalElements] = item;
            this.totalElements++;
        }
        else {
//            throw new ArrayIndexOutOfBoundsException("Append not possible. Array is full");
            System.out.println("\nAppend not possible. Array is full");
        }
    }

    public void insert (int insertAt, int item) {

        if (insertAt < 1 || !isValidArray() || array.length == 0 || insertAt > this.totalElements +1) {
            System.out.println("\nInsert not possible.");
            return;
        }

        if (this.array.length <= this.totalElements + 1) {
            System.out.println("\nInsert not possible. Array is full");
            return;
        }

        for (int index = this.totalElements; index >= insertAt; index--) {
            this.array[index] = this.array[index-1];
        }
        this.array[insertAt - 1] = item;
        this.totalElements++;
    }

    public void delete (int deleteAt) {
        if (deleteAt < 1 || this.totalElements == 0 || !isValidArray() || array.length == 0 || deleteAt > this.totalElements) {
            System.out.println("\nDelete not possible.");
            return;
        }

        for (int index = deleteAt - 1; index < this.totalElements - 1; index++) {
            this.array[index] = this.array[index+1];
        }
        this.array[this.totalElements - 1] = 0;
        this.totalElements--;
    }

    public boolean isValidArray() {
        return this.array != null;
    }

    public int get(int index) {
        if (index < 0 || index >= totalElements){
            return -1;
        }
        return this.array[index];
    }

    public void set(int value, int index) {
        if (index < 0 || index >= totalElements){
            return;
        }
        this.array[index] = value;
    }

    public int min() {

        if (!isValidArray() || this.totalElements == 0) {
            return -1;
        }

        int minValue = this.array[0];

        for (int index = 1; index < this.totalElements; index++) {
            if (minValue > this.array[index]) {
                minValue = this.array[index];
            }
        }

        return minValue;
    }

    public int max() {

        if (!isValidArray() || this.totalElements == 0) {
            return -1;
        }

        int maxValue = this.array[0];

        for (int index = 1; index < this.totalElements; index++) {
            if (maxValue < this.array[index]) {
                maxValue = this.array[index];
            }
        }

        return maxValue;
    }

    public int sumIteration() {

        if (!isValidArray() || this.totalElements == 0) {
            return 0;
        }

        int result = 0;

        for (int index = 0; index < this.totalElements; index++) {
            result += this.array[index];
        }

        return result;
    }

    public int sumRecursion(int index) {

        if (!isValidArray() || index < 0 || this.totalElements == 0 || index >= this.totalElements) {
            return 0;
        }

        return this.array[index] + sumRecursion(index-1);
    }

    public double average() {

        if (!isValidArray() || this.totalElements == 0) {
            return -1;
        }

        double result = 0;

        for (int index = 0; index < this.totalElements; index++) {
            result += this.array[index];
        }

        return result / this.totalElements;

    }

    public void reverseUsingExtraSpace() {

        if (!isValidArray() || this.totalElements == 0) {
            return;
        }

        int[] temporary = new int[this.totalElements];

        for (int i = this.totalElements-1, j = 0; i >= 0 && j < temporary.length; i--, j++) {
            temporary[j] = this.array[i];
        }

        System.arraycopy(temporary, 0, this.array, 0, this.totalElements);
    }

    public void reverseWithoutExtraSpace() {

        if (!isValidArray() || this.totalElements == 0) {
            return;
        }

        /*
        int start = 0;
        int end = this.totalElements - 1;

        while (start < end) {
            swap(this.array, start++, end--);
        }

         */

        for (int index = 0; index < this.totalElements / 2; index++) {
            swap(this.array, index, this.totalElements-index-1);
        }
    }

    public void leftShift() {

        if (!isValidArray() || this.totalElements == 0) {
            return;
        }

        // remove first element
        this.array[0] = 0;

        for (int index = 1; index < this.totalElements; index++) {
            this.array[index-1] = this.array[index];
        }

        // remove last element
        this.array[this.totalElements - 1] = 0;
        this.totalElements--;
    }

    public void rotateLeftShift() {

        if (!isValidArray() || this.totalElements == 0) {
            return;
        }

        // store first element
        int temp = this.array[0];

        for (int index = 1; index < this.totalElements; index++) {
            this.array[index-1] = this.array[index];
        }

        // replace last element with first element
        this.array[this.totalElements - 1] = temp;
    }


    public void rightShift() {

        if (!isValidArray() || this.totalElements == 0) {
            return;
        }

        // remove first element
        this.array[0] = 0;

        for (int index = 1; index < this.totalElements; index++) {
            this.array[index-1] = this.array[index];
        }

        // remove last element
        this.array[this.totalElements - 1] = 0;
        this.totalElements--;
    }

    private void swap(int[] arr, int s, int e){
        int temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
    }


    public static void main(String[] args) {

        ArrayOperation arrayOperation = new ArrayOperation(5);

        arrayOperation.append(1);
        arrayOperation.append(2);
        arrayOperation.append(3);
        arrayOperation.append(4);
        arrayOperation.append(5);
        arrayOperation.display();

        for (int i = 0; i < 3; i++) {
            arrayOperation.rotateLeftShift();
        }
        arrayOperation.display();

    }
}
