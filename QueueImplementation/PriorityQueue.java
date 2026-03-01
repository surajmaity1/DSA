package org.surajmyt.QueueImplementation;

class Item {
    int value;
    int priority;
}

class PriorityQueue {

    static Item[] array;
    private int index;
    private int size = 0;

    public PriorityQueue() {
        array = new Item[20];
        index = 0;
    }

    public int enqueue(int value, int priority) {

        if (array == null || array.length == 0) {
            return -1;
        }

        array[index] = new Item();

        array[index].value = value;
        array[index].priority = priority;

        index++;
        size++;
        return index - 1;
    }

    public int dequeue() {

        int peekIndex = peek();

        if (peekIndex == -1 || array == null || size == 0) {
            return -1;
        }

        int deletedValue = array[peekIndex].value;

        for (int itemIndex = peekIndex; itemIndex+1 < size; itemIndex++) {
            array[itemIndex].value = array[itemIndex + 1].value;
        }

        size--;
        array[size].value = array[size].priority = 0;
        return deletedValue;
    }

    public int peek() {

        if (array == null || array.length == 0 || size == 0) {
            return -1;
        }

        int highestPriority = Integer.MIN_VALUE;
        int highestPriorityItemsIndex = -1;

        for (int itemIndex = 0; itemIndex < size; itemIndex++) {

            if (highestPriority == array[itemIndex].priority &&
                    highestPriorityItemsIndex > -1 &&
                    array[itemIndex].value > array[highestPriorityItemsIndex].value
            ) {
                highestPriority = array[itemIndex].priority;
                highestPriorityItemsIndex = itemIndex;
            }else if (highestPriority < array[itemIndex].priority) {
                highestPriority = array[itemIndex].priority;
                highestPriorityItemsIndex = itemIndex;
            }
        }

        return highestPriorityItemsIndex;
    }

    public void display() {
        if (size == 0) {
            System.out.println("Empty");
        }
        else {
            for (int index = 0; index < size; index++) {
                System.out.print(array[index].value + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {

        PriorityQueue priorityQueue = new PriorityQueue();

        int insertedIndex = priorityQueue.enqueue(10, 2);
        System.out.println("Inserted Value " + array[insertedIndex].value);
        insertedIndex = priorityQueue.enqueue(14, 4);
        System.out.println("Inserted Value " + array[insertedIndex].value);
        insertedIndex = priorityQueue.enqueue(16, 4);
        System.out.println("Inserted Value " + array[insertedIndex].value);
        insertedIndex = priorityQueue.enqueue(12, 3);
        System.out.println("Inserted Value " + array[insertedIndex].value);

        int peekIndex = priorityQueue.peek();
        System.out.println("Peek Value " + array[peekIndex].value);

        priorityQueue.display();

        int deletedValue = priorityQueue.dequeue();
        System.out.println("Deleted Value " + deletedValue);

        peekIndex = priorityQueue.peek();
        System.out.println("Peek Value " + array[peekIndex].value);

        priorityQueue.display();


        deletedValue = priorityQueue.dequeue();
        System.out.println("Deleted Value " + deletedValue);

        priorityQueue.display();
    }
}