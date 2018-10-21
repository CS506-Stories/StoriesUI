import validation from './Validation.js'

export default function validate(fieldName, value) {
  var formValues = {}
  formValues[fieldName] = value

  var formFields = {}
  formFields[fieldName] = validation[field]
  const result = validatejs(formValues, formFields)

  if (result) {
    // Return only the field error message if there are multiple
    return result[field][0]
  }
  return null
}

