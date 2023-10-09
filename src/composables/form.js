import {provide, ref, inject, computed} from "vue";
const SymbolProvideForm = Symbol('provideForm')
const prepareObj = (obj) => {
    const res = {}
    for(let key in obj){
        res[key] = ''
    }
    return res;

}
const useForm = (
    initialValue = {}
) => {

    const form = ref(initialValue);

    const errors = ref(prepareObj(initialValue));
    const onSetValue = (event, name) => {
        let newValue = event
        if (event instanceof Event){
            newValue = event.target.value
        }
        form.value[name] = newValue

    }

    const state ={
        form,
        errors,
        onSetValue
    }

    provide(SymbolProvideForm, state);
    return state;
}

const useField = (props) =>{
    const formState = inject(SymbolProvideForm);
    const onSetValue = (event) => formState.onSetValue(event, props.name)
    const value = computed({
        get(){
            return formState.form.value[props.name]

        },
        set:onSetValue
    })

    return {value, onSetValue};

}

export {useForm, useField}

