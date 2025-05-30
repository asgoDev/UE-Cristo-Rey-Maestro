import { useContext } from 'react'
import { ComplexInputContext } from '../context/ComplexInputContext'
import '../styles/complex-input.css'
import Input from './Input'
import Select from './Select'
import Radio from './Radio'
import Checkbox from './Checkbox'
import InputFile from './InputFile'

function ComplexInput() {
  const { inputConfig, inputState } = useContext(ComplexInputContext)
  const { required, title, type, id, label } = inputConfig
  const [inputValue] = inputState

  const chooseElement = () => {
    if (type == 'radio') return <Radio />
    if (type == 'select') return <Select />
    if (type == 'file') return <InputFile />
    if (type == 'checkbox') return <Checkbox />
    return <Input />
  }

  return (
    <label
      className={`complex-input-label ${required && 'required'}`}
      title={title}
      htmlFor={id}
    >
      <span
        className={`complex-input-label__title ${
          (inputValue ||
            type == 'date' ||
            type == 'select' ||
            type == 'checkbox' ||
            type == 'textarea' ||
            type == 'radio') &&
          't-translate-0'
        }`}
      >
        {label}
      </span>
      {chooseElement()}
    </label>
  )
}

export default ComplexInput
