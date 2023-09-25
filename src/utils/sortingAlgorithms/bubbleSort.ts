import { store } from "../../store";

export const bubbleSort = async (arr: number[]) => {
  if(!store.isSorting){
    return;
  }
    const n = arr.length;
    let sorted = false;
  
    while (!sorted) {
      if(!store.isSorting){
        break;
      }
      let swapped = false;
      sorted = true;
  
      for (let i = 0; i < n - 1; i++) {
        const el = document.getElementsByClassName('number');

        if (arr[i] > arr[i + 1]) {
          el[i].classList.add('compared');
          el[i + 1].classList.add('compared');
  
          await new Promise((resolve) => setTimeout(resolve, 8));
  
          const temp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = temp;
          swapped = true;
          sorted = false;

          setTimeout(() => {
            el[i].classList.remove('compared');
            el[i + 1].classList.remove('compared');
          }, 8);
        }
      }
  
      if (!swapped && store.isSorting) {
        break;
      }

    }
  };