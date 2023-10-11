import { provide, ref, inject, computed, isRef } from "vue";

const SymbolProvideForm = Symbol("provideForm");
const prepareObj = (obj) => {
    const res = {};
    for (let key in obj) {
        res[key] = "";
    }
    return res;
};
const useForm = (initialValue = {}, rawSchema) => {
    const form = ref(initialValue);

    const errors = ref(prepareObj(initialValue));
    const validate = async (name) => {
        const schema = isRef(rawSchema) ? rawSchema.value : rawSchema; //unref(rawSchema) це едентично
        if (!schema) {
            return;
        }
        try {
            await schema.validate({ [name]: form.value[name] });
            errors.value[name] = "";
        } catch (error) {
            errors.value[name] = error.errors[0];
        }
    };
    // const validate = (name) => {
    //   if (!form.value[name]) {
    //     errors.value[name] = name + " is required";
    //     return;
    //   }
    //   errors.value[name] = "";
    // };
    const checkIsValid = async () => {
        let isValid = true;
        for (let key in errors.value) {
            await validate(key);
            if (errors.value[key]) {
                isValid = false;
            }
        }
        return isValid;
    };
    const onSetValue = (event, name) => {
        let newValue = event;
        if (event instanceof Event) {
            newValue = event.target.value;
        }
        form.value[name] = newValue;
        validate(name);
    };

    const state = {
        form,
        errors,
        onSetValue,
        checkIsValid,
    };

    provide(SymbolProvideForm, state);
    return state;
};

const useField = (props) => {
    const formState = inject(SymbolProvideForm);

    const onSetValue = (event) => formState.onSetValue(event, props.name);
    const value = computed({
        get() {
            return formState.form.value[props.name];
        },
        set: onSetValue,
    });
    const error = computed(() => formState.errors.value[props.name]);

    return { value, error, onSetValue };
};

export { useForm, useField };