export const quickSort = async(arr:number[], low:number, high:number) => {
    if(low < high){
        let pivotIndex = await partition(arr,low,high)
        
        quickSort(arr,low, pivotIndex - 1)
        quickSort(arr,pivotIndex + 1, high)
    }

}

async function partition(arr:number[],low:number,high:number):Promise<number>{
    const numbers = document.getElementsByClassName("number");

    for (let i = low; i < high; i++) {
      numbers[i].classList.add("sorting");
    }

  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      numbers[j].classList.add("compared");
      numbers[high].classList.add("compared");
      i++;
      await new Promise((res) => setTimeout(res, 10));
      [arr[i], arr[j]] = [arr[j], arr[i]];

      numbers[j].classList.remove("compared");
      numbers[high].classList.remove("compared");
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  for (let i = low; i < high; i++) {
    if (i !== high) {
      numbers[i].classList.remove("sorting");
    }
  }

  return i + 1;
}