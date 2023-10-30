import React, { useCallback, useState } from 'react'

function useFormValidation() {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  // const [isValid, setIsValid] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name
    const value = e.target.value

    setValues({
      ...values,
      [name]: value,
    })

    setErrors({
      ...errors,
      [name]: e.target.validationMessage,
    })
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
  }
}

export default useFormValidation
