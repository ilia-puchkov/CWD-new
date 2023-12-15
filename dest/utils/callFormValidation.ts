import React, { useCallback, useState } from 'react'
import isMobilePhone from 'validator/lib/isMobilePhone'

function useCallFormValidation() {
  const [values, setValues] = useState({ name: '', phone: '' })
  const [errors, setErrors] = useState({ name: '', phone: '' })
  const [isValid, setIsValid] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name
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

  const resetForm = useCallback(() => {
    setValues({ name: '', phone: '' })
    setErrors({ name: '', phone: '' })
  }, [setValues, setErrors])

  return {
    handleChange,
    errors,
    resetForm,
    values,
    isValid,
  }
}

export default useCallFormValidation
