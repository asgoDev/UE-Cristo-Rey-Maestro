import { useContext } from 'react'
import { ComplexInputContext } from '../context/ComplexInputContext'
import '../styles/checkbox.css'

function Checkbox() {
  const { inputConfig, inputState, styles } = useContext(ComplexInputContext)
  const { id, options } = inputConfig
  const [value, setValue] = inputState

  const inputControl = (e) => {
    setValue((prev) => {
      if (prev.includes(e.target.value)) {
        return prev.filter((item) => item !== e.target.value)
      } else {
        return [...prev, e.target.value]
      }
    })
  }

  return (
    <fieldset className={`complex-input__checkbox-fieldset ${styles()}`}>
      {options.map((option, i) => (
        <label key={i} className="complex-input__checkbox-label">
          <span className="complex-input__checkbox-title">{option}</span>
          <input
            className="complex-input__checkbox"
            id={`check-${option.toLowerCase()}`}
            name={id}
            value={option}
            type="checkbox"
            onChange={inputControl}
            checked={value.includes(option)}
          />
        </label>
      ))}
    </fieldset>
  )
}

export default Checkbox
