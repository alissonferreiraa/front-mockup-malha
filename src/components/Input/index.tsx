import  { useEffect, useRef } from 'react'
import { useField } from '@unform/core';

type Props = {
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

function Input({ name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      }
    })
  },[fieldName, registerField]);

  return (
    <>
    <input 
       ref={inputRef} 
       defaultValue={defaultValue} 
       name={name} 
       {...rest}
    />

    {error && <span>{error}</span>}
    </>
  )
}

export default Input;