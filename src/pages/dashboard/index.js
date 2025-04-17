import {React, useEffect, useState } from 'react'

import { getConsumidores } from '../../services/consumidores.js'
import {getServicosPrestados} from '../../services/servicosPrestados.js'

const Dashboard = () => {

  const [clientes, setClientes] = useState ( '')
  const [clientesFiltrados, setClientesFiltrados] = useState ('')
  const [inputNomeCliente, setInputNomeCliente] = useState ('')

  const [servicos, setServicos] = useState ( '')
  const [servicoPrestadoFiltrados, setServicoPrestadoFiltrados] = useState ('')
  const [inputServicoPrestado, setInputServicoPrestado] = useState ('')

  const handleChangeInputNome =  (e) => { 
    const valor = e.target.value // aqui eu consigo pegar o valor que o usuário digitou, não como VALUE do input, mas VALUE DO EVENTO ONCHANGE.
    const valorLowerCase = valor.toLowerCase()
    setInputNomeCliente(valor)    // então, dou este valor do onchange para o state 
    const filtraClientes = clientes.filter ( ( elem ) => elem.nome.toLowerCase().includes(valorLowerCase))
    setClientesFiltrados(filtraClientes)
  }

  const handleChangeInputServicoPrestado =  (e) => { 
    const valor = e.target.value 
    const valorLowerCase = valor.toLowerCase()
    setInputServicoPrestado(valor)    
    const filtraServicos = servicos.filter ( ( elem ) => elem.nomeServico.toLowerCase().includes(valorLowerCase))
    console.log(`resultado do filter nos servicos${JSON.stringify(filtraServicos)}`)
    setServicoPrestadoFiltrados(filtraServicos)
  }


  const handleClienteSelected = (elem) => {
    setInputNomeCliente(elem)
    setClientesFiltrados([])
  }
  
  const handleServicoSelected = (elem) => {
    setInputServicoPrestado(elem)
    setServicoPrestadoFiltrados([])
  }

  
  const loadClientes = async () => {
    const consumidores = await getConsumidores() // consumidores recebe .data {array de objetos}
    setClientes(consumidores.data)
  }
  const loadServicos = async () => {
    const servicosPrestados = await getServicosPrestados() 
    setServicos(servicosPrestados.data)
  }
  
  useEffect ( ()=> {
    if (clientes === '')
      loadClientes()
    console.log('useeffect ')
  }, [clientes])


  
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="border border-primary p-4 rounded">
            <h3 className="text-primary mb-3">Novo Atendimento</h3>

            <form className="needs-validation" noValidate>

              {/* nome */}
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="text"
                  name="nome" 
                  placeholder="Cliente"
                  maxLength="30"
                  required 
                  value={inputNomeCliente}
                  onChange={handleChangeInputNome}
                  onBlur={() => setTimeout(() => setClientesFiltrados([]), 200)} // delay com settimeout, sem ele, ao clicar no nome , antes de dar certo ele zera os clientesfiltrados (funcao acima )
                />
                <ul className='list-group position-absolute shadow'
                  style={{ zIndex: 1000 }}    
                >
                  { clientesFiltrados.length>0 ?  (clientesFiltrados.map( (elem, index) => {
                    return (
                      <li 
                        key={index}
                        className='list-group-item list-group-item-action'
                        style={{ cursor: 'pointer' }}
                        onClick={ () => { 
                          handleClienteSelected(elem.nome)
                        }}
                      >
                        {elem.nome}
                      </li>
                      
                    )
                  })) : null}
                </ul>
              </div>

              {/*servico prestado */}
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="text"
                  name="servicoPrestado" 
                  placeholder="Serviço Prestado"
                  maxLength="30"
                  required 
                  value={inputServicoPrestado}
                  onClick={loadServicos}
                  onChange={handleChangeInputServicoPrestado}
                  onBlur={() => setTimeout(() => setServicoPrestadoFiltrados([]), 200)} // delay com settimeout, sem ele, ao clicar no nome , antes de dar certo ele zera os clientesfiltrados (funcao acima )
                />
                <ul className='list-group position-absolute shadow'
                  style={{ zIndex: 1000 }}    
                >
                  { servicoPrestadoFiltrados.length>0 ?  (servicoPrestadoFiltrados.map( (elem, index) => {
                    return (
                      <li 
                        key={index}
                        className='list-group-item list-group-item-action'
                        style={{ cursor: 'pointer' }}
                        onClick={ () => { 
                          handleServicoSelected(elem.nomeServico)
                        }}
                      >
                        {elem.nomeServico}
                      </li>
                      
                    )
                  })) : null}
                </ul>
              </div>
           
                    
              {/* mensagem */}
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="text"
                  name="mensagem" 
                  placeholder="Mensagem"
                  maxLength="300"
                  required 
                />
              </div>          

              
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Criar
                </button>
              </div>
              
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}


export default Dashboard
