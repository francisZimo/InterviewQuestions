// import {onMounted,ref,getCurrentInstance,nextTick} from 'vue'

// export function tryOnMounted(fn, sync = true) {
//     console.log(getCurrentInstance(),'==instance')
//   if (getCurrentInstance())
//     onMounted(fn)
//   else if (sync)
//     fn()
//   else
//     nextTick(fn)
// }

// export const useWindowResize = function () {
//     var width = ref(0);
//     var height = ref(0);
  
//     function onResize() {
//       console.log('resize')
//       width.value = window.innerWidth;
//       height.value = window.innerHeight;
//     }
  
//     tryOnMounted(function () {
//       window.addEventListener("resize", onResize);
//       onResize();
//     });
//     // onUnmounted(function () {
//     //   window.removeEventListener("resize", onResize);
//     // });
//     return {
//       width: width,
//       height: height
//     };
//   };
import { onMounted, ref ,getCurrentInstance,nextTick} from "vue";


/**
 * Call onMounted() if it's inside a component lifecycle, if not, just call the function
 *
 * @param fn
 * @param sync if set to false, it will run in the nextTick() of Vue
 */
export function tryOnMounted(fn, sync = true) {
    console.log(getCurrentInstance(),'==instance')
  if (getCurrentInstance())
    onMounted(fn)
  else if (sync)
    fn()
  else
    nextTick(fn)
}

export const useWindowResize =()=> {
    tryOnMounted(() => {
        window.addEventListener("resize", onResize);
        onResize();
        });
 
  const width = ref(0);
  const height = ref(0);

  function onResize() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }
  return {
    width,
    height
  };
}



