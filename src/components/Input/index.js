import styled from 'styled-components';

const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #a1a1a1;
`;

const InputComponent = (props) => {
  const {
    value,
    label,
    onChange,
    onKeyPress,
    placeholder,
  } = props;

  const handleInputChange = (e) => {
    const { target } = e;
    if (onChange && typeof onChange === 'function') {
      onChange(target.value);
    }
  }

  const handleKeyPress = (e) => {
    if (onKeyPress && typeof onKeyPress === 'function') {
      onKeyPress(e)
    }
  }

  return <div className="input-wrapper">
    <label>{label}</label>
    <Input
      value={value}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
      placeholder={placeholder}
    />
  </div>
}

export default InputComponent
