import { reactive } from 'vue';

export const store = reactive({
  isSorting: false,
});

export function setIsSorting(state:boolean) {
  store.isSorting = state;
}
