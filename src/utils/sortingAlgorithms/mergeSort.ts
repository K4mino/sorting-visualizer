import { store } from "../../store";

export const mergeSort = async (arr:number[], left:number, right:number) => {
    if(!store.isSorting){
      return;
    }
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      await mergeSort(arr, left, mid);
      await mergeSort(arr, mid + 1, right);
      await merge(arr, left, mid, right);
    }
  };
  
  const merge = async (arr:number[], left:number, mid:number, right:number) => {
    if(!store.isSorting){
      return;
    }
    let leftArr = arr.slice(left, mid + 1);
    let rightArr = arr.slice(mid + 1, right + 1);
  
    let i = left;
    let leftIdx = 0;
    let rightIdx = 0;
    const numbers = document.getElementsByClassName('number');
  
    while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
      const leftEl = numbers[leftIdx + left]
      const rightEl = numbers[rightIdx + mid]
  
      leftEl.classList.add('compared')
      rightEl.classList.add('compared')
      await new Promise((res) => setTimeout(res, 10));
  
      if (leftArr[leftIdx] <= rightArr[rightIdx]) {
        arr[i] = leftArr[leftIdx];
        leftIdx++;
      } else {
        arr[i] = rightArr[rightIdx];
        rightIdx++;
      }
  
      i++;
  
      leftEl.classList.remove('compared')
      rightEl.classList.remove('compared')
    }
  
    while (leftIdx < leftArr.length) {
      const leftEl = numbers[leftIdx + left]
  
      leftEl.classList.add('compared')
      await new Promise((res) => setTimeout(res, 10));
      arr[i] = leftArr[leftIdx];
      leftIdx++;
      i++;
  
      leftEl.classList.remove('compared')
    }
  
    while (rightIdx < rightArr.length) {
      const rightEl = numbers[rightIdx + mid]
      rightEl.classList.add('compared')
      await new Promise((res) => setTimeout(res, 10));
      arr[i] = rightArr[rightIdx];
      rightIdx++;
      i++;
  
      rightEl.classList.remove('compared')
    }
  };