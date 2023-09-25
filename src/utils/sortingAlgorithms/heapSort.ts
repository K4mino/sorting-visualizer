import { store } from "../../store";

let stopSorting = false;

export const heapSort = async(arr:number[]) => {
    if(!store.isSorting){
        return;
      }

    const n = arr.length
    const numbers = document.getElementsByClassName('number')
  
    for(let i = Math.floor(n/2) - 1; i >= 0;i--){
        await heapify(arr,n,i)
    }
    
    for (let i = n - 1; i > 0; i--) {
        if (stopSorting) {
            return;
        }

        const firstEl = numbers[0]
        const secondEl = numbers[i]
  
        firstEl.classList.add('compared')
        secondEl.classList.add('compared')

        await new Promise((res) => setTimeout(res,10))
        const temp = arr[0]
        arr[0] = arr[i]
        arr[i] = temp
  
        firstEl.classList.remove('compared')
        secondEl.classList.remove('compared')
  
        await heapify(arr,i,0)
    }
  }
  
async function heapify(arr:number[], n:number , i:number){
    if(!store.isSorting){
        return;
      }

    const numbers = document.getElementsByClassName('number')
    let largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2
  
    if(left < n && arr[left] > arr[largest]){
      largest = left
    }
  
    if(right < n && arr[right] > arr[largest]){
      largest = right
    }
  
    if(largest !== i){
      const firstEl = numbers[0]
      const secondEl = numbers[i]
  
      firstEl.classList.add('compared')
      secondEl.classList.add('compared')

      await new Promise((res) => setTimeout(res,10))
      const temp = arr[i]
      arr[i] = arr[largest]
      arr[largest] = temp
  
      firstEl.classList.remove('compared')
      secondEl.classList.remove('compared')
  
      await heapify(arr,n,largest)
    }
  }

