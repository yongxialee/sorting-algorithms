/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr,start,end){
    const pivotValue = arr[start]
    let swapIndex = start
    for (let i = start + 1; i <= end; i++) {
      if (pivotValue > arr[i]) {
        swapIndex++
        if (i !== swapIndex) {
          // SWAP
          ;[arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
        }
      }
    }
    if (swapIndex !== start) {
      // Swap pivot into correct place
      ;[arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
    }
    return swapIndex
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left,right) {
  // Base case
  if (left >= right) return
  let pivotIndex = pivot(arr, left, right)
  // Left
  quickSort(arr, left, pivotIndex - 1)
  // Right
  quickSort(arr, pivotIndex + 1, right)
  return arr
}

module.exports = quickSort;