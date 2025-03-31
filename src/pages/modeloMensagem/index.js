import {React, useState } from 'react'

import {tipoServicosCadastrados} from '../../components/data/database.js'


const ModeloMensagem = () => {

  const [servicosFiltrados, setServicosFiltrados] = useState ('')
  const [inputServico, setInputServico] = useState ('')

  const handleChangeInputServico = (e) => {  
    const valor = e.target.value // aqui eu consigo pegar o valor que o usuário digitou, não como VALUE do input, mas VALUE DO EVENTO ONCHANGE.
    const valorLowerCase = valor.toLowerCase()
    setInputServico(valor)    // então, dou este valor do onchange para o state 
    
    const filtrados = tipoServicosCadastrados.filter( (elem) => 
      elem.toLowerCase().includes(valorLowerCase) )
      
    setServicosFiltrados(filtrados)
  }

  const handleSelected = (elem) => {
    setInputServico(elem)
    setServicosFiltrados([])
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="border border-primary p-4 rounded">
            <h3 className="text-primary mb-3">Nova Mensagem</h3>

            <form className="needs-validation" noValidate>
              
              {/* Nome Mensagem */}
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="text"
                  name="nomeMensagem" 
                  placeholder="Nome da Mensagem"
                  maxLength="30"
                  required 
                />
              </div>   


              {/* texto da mensagem */}
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="text"
                  name="textoModelo" 
                  placeholder="Texto da mensagem"
                  maxLength="200"
                  required 
                />
              </div> 
               
                    
              {/* dias para envio */}
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="number"
                  name="mensagem" 
                  placeholder="Quantidade de dias para envio"
                  maxLength="3"
                  required 
                />
              </div>   

              
              {/* tipo de servico */}
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="text"
                  name="servico" 
                  placeholder="Selecione o serviço"
                  maxLength="30"
                  required 
                  value={inputServico}
                  onChange={handleChangeInputServico}
                />
                <ul className='list-group position-absolute shadow'
                  style={{ zIndex: 1000 }}    
                >
                  { servicosFiltrados.length>0 ?  (servicosFiltrados.map( (elem, index) => {
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


export default ModeloMensagem
