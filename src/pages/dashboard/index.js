import {React, useEffect, useState } from 'react'

import {clientesCadastrados, tipoServicosCadastrados} from '../../components/data/database.js'

import { getConsumidores } from '../../services/consumidores.js'


const Dashboard = () => {

  const [clientes, setClientes] = useState ( '')
  const [clientesFiltrados, setClientesFiltrados] = useState ('')
  const [inputNomeCliente, setInputNomeCliente] = useState ('')

  // const [servicoPrestadoFiltrados, setServicoPrestadoFiltrados] = useState ('')
  // const [inputServicoPrestado, setInputServicoPrestado] = useState ('')

  const handleChangeInputNome =  (e) => { 
    
    const valor = e.target.value // aqui eu consigo pegar o valor que o usuário digitou, não como VALUE do input, mas VALUE DO EVENTO ONCHANGE.
    const valorLowerCase = valor.toLowerCase()
    console.log(valorLowerCase)
    console.log(clientes)
    setInputNomeCliente(valor)    // então, dou este valor do onchange para o state 

    const clientesFiltradosMAP = clientes.map ( (elem) => elem.nome )
    console.log(`clientes filtrados MAP: ${clientesFiltradosMAP}`)
    
    const clientesFiltradosFilter = clientes.filter ( ( elem ) => elem.nome.toLowerCase().includes(valorLowerCase))
    console.log(`resultado Filter:  ${JSON.stringify(clientesFiltradosFilter)}`)



    // const clientesFiltrados = clientes.filter( (elem) => 
    //   elem.toLowerCase().includes(valorLowerCase) )
      
    // setClientesFiltrados(clientesFiltrados)
  }


  const handleClienteSelected = (elem) => {
    setInputNomeCliente(elem)
    setClientesFiltrados([])
  }




  useEffect ( ()=> {
    if (clientes === '')
      loadClientes()
  }, [clientes])
  
  const loadClientes = async () => {
    const consumidores = await getConsumidores()
    // consumidores recebe .data array de objetos
    // console.log(`consumidores: ${consumidores.data.map( (elem ) => { return elem.id }   )}`)
    setClientes(consumidores.data)
  }


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
                  // onBlur={() => setTimeout(() => setClientesFiltrados([]), 200)} // delay com settimeout, sem ele, ao clicar no nome , antes de dar certo ele zera os clientesfiltrados (funcao acima )
                />
                {/* <ul className='list-group position-absolute shadow'
                  style={{ zIndex: 1000 }}    
                >
                  { clientesFiltrados.length>0 ?  (clientesFiltrados.map( (elem, index) => {
                    return (
                      <li 
                        key={index}
                        className='list-group-item list-group-item-action'
                        style={{ cursor: 'pointer' }}
                        onClick={ () => { 
                          handleClienteSelected(elem)
                        }}
                      >
                        {elem}
                      </li>
                      
                    )
                  })) : null}
                </ul> */}
              </div>

              {/* servico prestado */}
              {/* <div className="mb-3">
                <input 
                  className="form-control" 
                  type="text"
                  name="servicoPrestado" 
                  placeholder="Serviço Prestado"
                  maxLength="30"
                  required 
                  value={inputServicoPrestado}
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
                          handleServicoPrestadoSelected(elem)
                        }}
                      >
                        {elem}
                      </li>
                      
                    )
                  })) : null}
                </ul>
              </div> */}
           
                    
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

            <div>clientes: {JSON.stringify(clientes)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Dashboard
