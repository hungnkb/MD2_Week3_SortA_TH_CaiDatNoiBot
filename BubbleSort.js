class BubbleSort {
    static list = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12]

    bubbleSort(list) {
        let a = 0;
        let b = 0;
        let temp = 0

        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list.length - i - 1; j++) {
                if (list[j] > list[j + 1]) {
                    temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                }
            }
        }
        return list;
    }
}

let bubbleSort = new BubbleSort();
console.log(bubbleSort.bubbleSort(BubbleSort.list))