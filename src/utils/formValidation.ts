import React, { useCallback, useState } from 'react'
import isMobilePhone from 'validator/lib/isMobilePhone'

function useFormValidation() {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name: string = e.target.name
    const value = e.target.value

    setValues({
      ...values,
      [name]: value,
    })

    if (name === 'phone') {
      !isMobilePhone(value, ['ru-RU'])
        ? e.target.setCustomValidity('Неверно указан телефон')
        : e.target.setCustomValidity('')
    }

    setErrors({
      ...errors,
      [name]: e.target.validationMessage,
    })

    setIsValid(e.target.closest('form').checkValidity())
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}) => {
      setValues(newValues)
      setErrors(newErrors)
    },
    [setValues, setErrors]
  )

  return {
    handleChange,
    errors,
    resetForm,
    values,
    isValid,
  }
}

export default useFormValidation
