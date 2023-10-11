import {inject} from "vue";
import { ref } from "vue";
const useForm = () => {
}

const useField = (props) => {
    const value = ref(props.modelValue);
    console.log(value)
    // const formState = inject(SymbolProvideForm);
    //
    // const onSetValue = (newValue) => {
    //     value.value = newValue;
    // }
    //
     return {
         value,
     };
}




export { useForm, useField };