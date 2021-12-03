import { render, screen } from "@testing-library/react";
import App from './App';

describe("App page", () => {
  it("Deve verificar se tem a classe container", () => {
    render(<App />);

    const containerId = screen.getByTestId('containerId');

    expect(containerId).toHaveClass('container');
  })

  it("Deve verificar se tem a classe wrapper", () => {
    render(<App />);

    const wrapperId = screen.getByTestId('wrapperId');

    expect(wrapperId).toHaveClass('wrapper');
  })
});