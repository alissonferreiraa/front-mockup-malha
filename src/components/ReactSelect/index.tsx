import ReactSelect, {  Props as SelectProps } from 'react-select';

type IProps = SelectProps & {
  'data-testid'?: string;
}

function Select({ options, onChange, ...rest}: IProps) {
  return (
    <ReactSelect
      options={options}
      onChange={onChange}
      {...rest}
    />
  )
}

export default Select;