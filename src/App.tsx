
// import { ChangeEvent, InputHTMLAttributes } from 'react';
import { ChangeEvent } from 'react';
// import { Form } from '@unform/web';
// import { FormHandles } from '@unform/core';
// import Input from './components/Input';
import ReactSelect, { SingleValue } from 'react-select';
import Input from './components/Input2'
import { inputs } from './utils/inputs.data';

import './styles/global.css';
// type OnChangeType = InputHTMLAttributes<HTMLInputElement> & {
//   value: string;
// }

type OptionType = {
  value: string;
  label: string;
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


function App() {

  function handleOnchageInput(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
  }

  function handleSelect(option: SingleValue<OptionType>) {
    console.log(option?.value);
  }

  return (
    <div className="container">
      <div className="wrapper">
        <ReactSelect
          onChange={option => handleSelect(option)}
          options={options}
        />
        <div className="wrapper-input">
          <input
            name="codigoProduto"
            placeholder="Codigo Produto"
            type="text"
            onChange={handleOnchageInput}
          />

          <input
            name="descricaoProduto"
            type="text"
            value="Dipirona XXXX"
            readOnly
          />

          <input
            name="tipoCliente"
            placeholder="Privado/Publico"
            type="text"
          />

          <input
            name="ufCliente"
            placeholder="DF"
            type="text"
          />

          <input
            name="cdVenda"
            type="text"
            value="CD_DF"
            readOnly
          />

          <input
            name="empresaVenda"
            type="text"
            value="Elfa DF"
            readOnly
          />

          <input
            name="sistemaVenda"
            type="text"
            value="Protheus Elfa"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default App;
