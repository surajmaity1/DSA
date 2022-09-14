package Heap;

public class MaxHeap {
    private int[] heap;
    private int size;
    private int max;

    public MaxHeap(int max){
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
        int currentNodeIndex = size;

        while (heap[currentNodeIndex] > heap[parentNode(currentNodeIndex)]){
            swap(currentNodeIndex, parentNode(currentNodeIndex));
            currentNodeIndex = parentNode(currentNodeIndex);
        }
        size++;
    }

    private void maxHeapify(int currentIdx){
        if (isLeafNode(currentIdx)) return;

        int left = leftChild(currentIdx);
        int right = rightChild(currentIdx);

        if (heap[currentIdx] < heap[left] || heap[currentIdx] < heap[right]){
            if (heap[left] > heap[right]){
                swap(currentIdx, left);
                maxHeapify(left);
            }
            else{
                swap(currentIdx, right);
                maxHeapify(right);
            }
        }
    }

    public int removeElement(){
        int remElement = heap[0];
        heap[0] = heap[--size];
        maxHeapify(0);
        return remElement;
    }

    private int parentNode(int index){return (index-1)/2;}

    private int leftChild(int index){return 2*index + 1;}

    private int rightChild(int index){return 2*index + 2;}

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

    private boolean isLeafNode(int index){
        return index > (size / 2) && index <= size;
    }

    public void swap(int index1, int index2){
        int temp = heap[index1];
        heap[index1] = heap[index2];
        heap[index2] = temp;
    }
    public static void main(String[] args) {
        MaxHeap maxHeap = new MaxHeap(11);

        maxHeap.insert(1);
        maxHeap.insert(3);
        maxHeap.insert(5);
        maxHeap.insert(4);
        maxHeap.insert(6);
        maxHeap.insert(13);
        maxHeap.insert(10);
        maxHeap.insert(9);
        maxHeap.insert(8);
        maxHeap.insert(15);
        maxHeap.insert(17);



        maxHeap.print();

        System.out.println("Remove max :" + maxHeap.removeElement());
        maxHeap.print();
    }
}
