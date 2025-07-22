
import { FormEvent, useState } from 'react'
import styled from 'styled-components'

type Props = {
  aoPesquisar: (termo: string) => void
}

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`;
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

const Campo = styled.input.attrs({ type: 'search' })`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`;
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

const BtnPesquisar = styled.button.attrs({ type: 'submit' })`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`;
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTermo(e.target.value)}
      />
      <BtnPesquisar>
        Pesquisar
      </BtnPesquisar>
    </Form>
  )
}
export default FormVagas
