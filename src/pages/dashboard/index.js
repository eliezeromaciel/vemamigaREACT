import {React, useState } from 'react'

import {clientesCadastrados, tipoServicosCadastrados} from '../../components/data/database.js'


const Dashboard = () => {

  const [clientesFiltrados, setClientesFiltrados] = useState ('')
  const [inputNomeCliente, setInputNomeCliente] = useState ('')

  const handleChangeInputNome = (e) => {  
    const valor = e.target.value // aqui eu consigo pegar o valor que o usuário digitou, não como VALUE do input, mas VALUE DO EVENTO ONCHANGE.
    const valorLowerCase = valor.toLowerCase()
    setInputNomeCliente(valor)    // então, dou este valor do onchange para o state 
    
    const filtrados = clientesCadastrados.filter( (elem) => 
      elem.toLowerCase().includes(valorLowerCase) )
      
    setClientesFiltrados(filtrados)
  }

  const handleSelected = (elem) => {
    setInputNomeCliente(elem)
    setClientesFiltrados([])
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
                          handleSelected(elem)
                        }}
                      >
                        {elem}
                      </li>
                      
                    )
                  })) : null}
                </ul>
              </div>

            
              {/* serviço prestado */}
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="text"
                  name="servicoPrestado" 
                  placeholder="Serviço Prestado"
                  maxLength="30"
                  required 
                />
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
