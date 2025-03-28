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
    setInputNomeCliente(valor)    // então, dou este valor do onchange para o state 

    
    const filtrados = clientesCadastrados.filter( (elem) => 
      elem.toLowerCase().includes(valor) )
      
    setClientesFiltrados(filtrados)
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

              <div>
                lista dos nomes:
                <div>
                  {JSON.stringify(clientesFiltrados)}
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


// const Dashboard = () => {

//   const listaAlunos = [
//     { nome: 'Ana', idade: 20 },
//     { nome: 'Carlos', idade: 17 },
//     { nome: 'João', idade: 21 },
//     { nome: 'Maria', idade: 19 },
//   ]

//   const [ nomes, setNomes] = useState ('joao')
//   const [ alunos, setAlunos] = useState ('alunos maiores abaixo')
  
//   const [alunosPorLetra, setAlunosPorLetra] = useState('')

//   const filtraClienteNomeGrande = () => {

//     let novos = clientesCadastrados.filter ( (elemento) => 
//       elemento.length > 7 
//     )
//     setNomes(novos)
//   }

//   const filtraMaior = () => {
//     let alunosMaiores = listaAlunos.filter ( (elem) => 
//       elem.idade > 18
//     )
//     setAlunos(alunosMaiores)

//   }

//   const filtraLetra = () => {
//     const pegaLetraInput = document.getElementsByClassName('joao')
//     let listaAlunosPorLetra = listaAlunos.filter ( (elem) => 
//       elem.nome.toLowerCase().includes(pegaLetraInput[0].value) // LOWERCASE PARA TRANSFORMAR TUDO EM MINÚSCULAS
//     )
//     setAlunosPorLetra(listaAlunosPorLetra)

//   }
  


//   return (

//     <div>

//       <div>
//         <button onClick={filtraClienteNomeGrande}> aperte </button>
//         <li>lista de alunos maiores:</li>
//         <lu><button onClick={filtraMaior}>aperte:</button></lu>

//         <li> alunos maiores aqui: {JSON.stringify(alunos)}</li>
//       </div>

//       <div>
//         <li>lista de alunos com letra xxx :</li>
//         <lu> <input className='joao' type="text"
//           placeholder='pesquise por letras' />     </lu>
//         <lu> <button onClick={filtraLetra}>clique</button></lu>

//         <li> lista abaixo:  {JSON.stringify(alunosPorLetra)}</li>
//       </div>
      
//     </div>
//   )



// }

export default Dashboard
