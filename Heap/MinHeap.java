package org.surajmyt.Heap;

public class MinHeap {

    private int[] heap;
    private int size;
    private int max;

    public MinHeap(int max){
        this.size = 0;
        this.max = max;
        heap = new int[this.max];
    }

    public void insert(int node){
        if (size >= max){
            System.out.println("Insertion not possible");
            return;
        }

        heap[size] = node;

        int currentIdx = size;
        while (heap[currentIdx] < heap[parentNode(currentIdx)] ){
            swap(currentIdx, parentNode(currentIdx));
            currentIdx = parentNode(currentIdx);
        }
        size++;
    }

    public void minHeapfy(int currIdx){
        if (isLeafNode(currIdx)) return;

        int left = leftChild(currIdx);
        int right = rightChild(currIdx);

        while (heap[currIdx] > heap[left] || heap[currIdx] > heap[right]){
            if (heap[left] > heap[right]){
                swap(right, currIdx);
                minHeapfy(right);
            }
            else{
                swap(left, currIdx);
                minHeapfy(left);
            }
        }
    }

    public int removeElement(){
        if (size < 0) return -1;
        int remElement = heap[0];
        heap[0] = heap[--size];
        minHeapfy(0);
        return remElement;
    }

    private int parentNode(int index){return (index-1)/2;}

    private int leftChild(int index){return 2*index + 1;}

    private int rightChild(int index){return 2*index + 2;}

    private boolean isLeafNode(int index){
        return index > (size / 2) && index <= size;
    }

    public void swap(int index1, int index2){
        int temp = heap[index1];
        heap[index1] = heap[index2];
        heap[index2] = temp;
    }
    public void print(){
        for (int i = 0; i < size / 2; i++) {
            System.out.print("Parent : " + heap[i]);

            if (leftChild(i) < size)
                System.out.print(" Left Child :" + heap[leftChild(i)]);

            if (rightChild(i) < size)
                System.out.println(" Right Child: " + heap[rightChild(i)]);

            System.out.println();
        }
    }

    public static void main(String[] args) {
        MinHeap minHeap = new MinHeap(15);

        minHeap.insert(5);
        minHeap.insert(3);
        minHeap.insert(17);
        minHeap.insert(10);
        minHeap.insert(84);
        minHeap.insert(19);
        minHeap.insert(6);
        minHeap.insert(22);
        minHeap.insert(9);
        minHeap.print();

        System.out.println("Remove min root Node: " +minHeap.removeElement());
        minHeap.print();
    }
}
