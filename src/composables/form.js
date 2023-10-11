import { provide, ref, inject, computed } from "vue";
import * as yup from 'yup';

const SymbolProvideForm = Symbol("provideForm");

const validationSchema = yup.object({
    login: yup.string().min(5).max(15).email().matches(/^[A-Z][a-z]*$/, 'Имя пользователя должно начинаться с заглавной буквы'),
    mail:  yup.string().email(),
    password: yup.string().min(8, 'Поганий пароль!'),
    date: yup.date().max(2006, 'Только для взрослых 🔞'),
    number: yup.number().required().min(18), // Валидация для поля "number"
});

const validateField = async (name, value) => {
    const fieldSchema = validationSchema.fields[name];
    try {
        await fieldSchema.validate(value);
        return null;
    } catch (error) {
        return error.errors[0] || null;
    }
};

const useForm = (initialValue = {}) => {
    const form = ref(initialValue);
    const errors = ref({});

    const checkIsValid = async () => {
        return await validationSchema.isValid(form.value);
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

export { useForm, useField, validateField };
