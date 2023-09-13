import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

//JEST

test('quando o input estiver vazio, novos participantes não podem ser adicionados', () => {

    render(<Formulario   />)

    //encontrando imput no DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    //encontrando botão
    const botao = screen.getByRole('button')


    expect(input).toBeInTheDocument()
    expect(botao).toBeDisabled()
})