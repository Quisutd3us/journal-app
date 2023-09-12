import {useEffect, useState, useMemo} from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {

  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  // return the value for validForm before of checking the content of formValidation State
  const validForm = useMemo(() => {
    for (const nameFormValidation of Object.keys(formValidation)) {
      if (formValidation[nameFormValidation] !== null) return false;
    }
    return true;
  }, [formValidation])


  useEffect(() => {
    acrossFormValidations();
  }, [formState]);

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  const onResetForm = () => {
    setFormState(initialForm);
  }

  const acrossFormValidations = () => {
    const resultValidation = {};
    for (const nameValidation of Object.keys(formValidations)) {
      const [fn, errorValidation] = formValidations[nameValidation]
      console.log(formState[nameValidation])
      console.log(fn(formState[nameValidation]))
      resultValidation[`${nameValidation}Valid`] = fn(formState[nameValidation]) ? null : errorValidation
    }
    setFormValidation(resultValidation)
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    validForm,
    ...formValidation
  }
}