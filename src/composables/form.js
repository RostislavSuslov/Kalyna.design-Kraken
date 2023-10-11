import { provide, ref, inject, computed, isRef } from "vue";
import * as yup from 'yup';

const SymbolProvideForm = Symbol("provideForm");

// Создайте схему валидации Yup, например, для проверки возраста.
const validationSchema = yup.object({
    login: yup.string().min(5).max(10).email(),
    password: yup.string().min(5),
    birthDate: yup.date().max(new Date(), 'You must be at least 18 years old.'),
});

// Создайте функцию для валидации поля.
const validateField = async (name, value) => {
    const fieldSchema = validationSchema.fields[name];
    try {
        await fieldSchema.validate(value);
        return null; // Валидация успешна, возвращаем null
    } catch (error) {
        return error.errors[0]; // Возвращаем первую ошибку, если есть
    }
};

// Создайте функцию useForm, которая будет предоставлять данные формы и валидацию.
const useForm = (initialValue = {}) => {
    const form = ref(initialValue);
    const errors = ref({});

    const checkIsValid = async () => {
        let isValid = true;
        for (let key in errors.value) {
            await validateField(key, form.value[key]);
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
        validateField(name, newValue).then((error) => {
            errors.value[name] = error;
        });
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

// Создайте функцию useField для работы с полями формы.
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

export { useForm, useField, validateField  };
