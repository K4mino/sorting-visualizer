<template lang="">
    <div class="container">
        <div class="buttons-container">
            <button class="button" @click="generateArray">Generate Array / Restart</button>
            <button class="button" @click="startSorting('bubbleSort')" :disabled="store.isSorting">Bubble Sort</button>
            <button class="button" @click="startSorting('quickSort')" :disabled="store.isSorting">Quick Sort</button>
            <button class="button" @click="startSorting('mergeSort')" :disabled="store.isSorting">Merge Sort</button>
            <button class="button" @click="startSorting('heapSort')" :disabled="store.isSorting">Heap Sort</button>
            <input
              :disabled="store.isSorting"
              v-model="arraySize" 
              type="range" 
              id="arraySize" 
              name="arraySize" 
              min="25" max="arraySize" 
              step="25" 
              @change="generateArray">
            <label for="arraySize">Array size</label>
        </div>
        <div class="numbers-container">
          <div class="number" 
          v-for="(number,i) in numbers" 
          :key="i" 
          :style="{ height: `${number}px` }"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import type { Ref } from 'vue'
import {
  bubbleSort,
  quickSort,
  mergeSort,
  heapSort,
} from "../utils/sortingAlgorithms";
import { store, setIsSorting } from "../store";

const numbers:Ref<number[]> = ref([]);
const arraySize:Ref<number> = ref(150);
const windowWidth:Ref<number> = ref(window.innerWidth);
//const sortingInProgress = ref(false);
const handleResize = () => {
  windowWidth.value = window.innerWidth;

  if(windowWidth.value){
    
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const generateArray = () => {
  if (store.isSorting) {
    // If sorting is in progress, stop it
    setIsSorting(false);
  }
  const array:number[] = [];
  for (let i = 0; i < arraySize.value; i++) {
    array.push(randomNumbers(5, 550));
  }

  numbers.value = array;
  //sortingInProgress.value = false
};

onMounted(generateArray);

const startSorting = async (algorithm: string) => {
  //if(sortingInProgress.value) return
  if (store.isSorting) return;

  //sortingInProgress.value = true
  setIsSorting(true);
  if (algorithm === "bubbleSort") {
    await bubbleSort(numbers.value);
  }

  if (algorithm === "quickSort") {
    await quickSort(numbers.value, 0, numbers.value.length - 1);
  }

  if (algorithm === "mergeSort") {
    await mergeSort(numbers.value, 0, numbers.value.length - 1);
  }

  if (algorithm === "heapSort") {
    await heapSort(numbers.value);
  }

  //sortingInProgress.value = false
  setIsSorting(false);
};

const randomNumbers = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

async function testSortingAlgorithms() {
  //const javaScriptSortedArray = numbers.value.sort((a, b) => a - b);
  //const sortedArr = await quickSort(numbers.value.slice(),0,numbers.value.length - 1);
  //console.log(arraysAreEqual(javaScriptSortedArray, sortedArr));
}

function arraysAreEqual(arrayOne: number[], arrayTwo: number[]) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
</script>

<style lang="css">
.container {
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 15px;
}
.number {
  width: 5px;
  margin: 0 0.5px;
  background-color: cornflowerblue;
  transition: height 0.3s;
}

.numbers-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.buttons-container {
  padding-top: 20px;
  width: 100%;
  display: flex;
  gap: 20px;
}

.button {
  cursor: pointer;
  background-color: #2980b9;
  color: #fff;
  padding: 10px 15px;
  border-radius: 8px;
  transition: 0.2s linear;
  border: 1px solid #2980b9;
}

.button:disabled {
  background-color: gray;
  border-color: gray;
  color: silver;
  pointer-events: none;
}

.button:hover {
  background-color: #fff;
  color: #2980b9;
}

.compared {
  background-color: red !important;
}
.sorting {
  background-color: springgreen !important;
}

@media (max-width: 1368px) {
  .number {
    width: 4px;
  }
}
</style>