import {React, useState } from 'react'

const clientesCadastrados = [
  'Ana Souza',
  'Bruna Lima',
  'Carla Mendes',
  'Carlos Magnum',
  'Daniela Farias',
  'Fernanda Rocha',
  'Gabriela Silva',
  'Helena Costa',
  'Jeferson Silva',
  'Adalberta Felisbrina Souza Cândido' 
]

// const Dashboards = () => {
//   const [input, setInput] = useState('')
//   const [sugestoes, setSugestoes] = useState([])

//   const handleChange = (e) => {
//     const valor = e.target.value
//     setInput(valor)

//     if (valor.length > 0) {
//       const filtrados = clientesCadastrados.filter((cliente) =>
//         cliente.toLowerCase().includes(valor.toLowerCase())
//       )
//       setSugestoes(filtrados)
//     } else {
//       setSugestoes([])
//     }
//   }

//   const handleSelect = (nome) => {
//     setInput(nome)
//     setSugestoes([])
//   }

//   return (
//     <div className="container mt-3">
//       <label className="form-label">Nome da Cliente</label>
//       <input
//         type="text"
//         className="form-control"
//         value={input}
//         onChange={handleChange}
//         placeholder="Digite o nome..."
//       />


//       {sugestoes.length > 0 && (
//         <ul
//           className="list-group position-absolute mt-1 shadow"
//           style={{ zIndex: 10 }}
//         >
//           {sugestoes.map((cliente, index) => (
//             <li
//               key={index}
//               className="list-group-item list-group-item-action"
//               onClick={() => handleSelect(cliente)}
//               style={{ cursor: 'pointer' }}
//             >
//               {cliente}
//             </li>
//           ))}
//         </ul>
//       )}


//     </div>
//   )
// }


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
                  placeholder="Nome"
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

            
              {/* instagram */}
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">@</span>
                  <input 
                    className="form-control" 
                    type="text"
                    name="instagram" 
                    placeholder="Instagram"
                    maxLength="30"
                    required 
                  />
                </div>
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
