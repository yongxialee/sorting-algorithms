function insertionSort(arr) {
    for(let i=1;i<arr.length;i++){
        let temp = arr[i];
        let j=i-1;
        for( j;j>=0 && arr[j]>temp;j--){
            arr[j+1] = arr[j];
        }

        //or 
        // while(j>=0 && arr[j]>temp){
        //     arr[j+1]=arr[j]
        //j--
        // }
        arr[j+1]= temp
    }
    return arr;

}

module.exports = insertionSort;