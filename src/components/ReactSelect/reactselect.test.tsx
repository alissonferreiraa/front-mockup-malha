import { fireEvent, getAllByTestId, getByText, queryByTestId, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import ReactSelect from './index';

describe("ReactSelect Component", () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  it("Deve renderizar sem erros", () => {
    const mockedOnChange = jest.fn();

    render(<ReactSelect
      placeholder="Selecione a empresa"
      options={options}
      onChange={mockedOnChange}
    />)

    const placeholder = screen.getByText('Selecione a empresa');

    expect(placeholder).toBeTruthy();
  })

  it("Deve chamar onChange quando a primeira opção for selecionada", async () => {
    const mockedOnChange = jest.fn();

    render(<ReactSelect
      data-testid="selectId"
      name="select"
      placeholder="Selecione a empresa"
      options={options}
      onChange={mockedOnChange}
    />)

    const reactSelect = screen.queryByTestId('selectId');


    userEvent.selectOptions(screen.getByTestId('select'), 'chocolate');

    expect((screen.getByTestId('selectId') as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByTestId('selectId') as HTMLOptionElement).selected).toBeFalsy();
  })
})