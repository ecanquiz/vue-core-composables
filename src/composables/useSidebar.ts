import { reactive, toRefs } from "vue";

const state = reactive({
  isOpen: false,
  isClose: false,
});


export default function (){
  return {
    ...toRefs(state),
  };
}
