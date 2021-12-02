import { ChangeEvent } from "react";

type Props = {
    name: string;
    type?: string;
    value: string;
    readonly?: boolean;
    handleOnchageInput?: (e: ChangeEvent<HTMLInputElement>) => void;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

function InputHTML({name, type = 'text', value, readonly = false, ...rest} :InputProps) {
    return (
        <input
            name={name}
            type={type}
            value={value}
            readOnly={readonly}
            {...rest}
        />

    )
}

export default InputHTML;