// import React from 'react'

// const Empresas = () => {
//   return (
//     <div>
//             rota empresas


//     </div>
//   )
// }

// export default Empresas

import {React, useState} from 'react'



const Clientes = () => {
  
  const [telefone, setTelefone] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')

  
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '') // Remove tudo que não for número

    if (phoneNumber.length === 0) return '' // Permite apagar o campo

    if (phoneNumber.length <= 10) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}${phoneNumber.length > 6 ? '-' + phoneNumber.slice(6) : ''}`
    } else {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`
    }
  }

  const formatDate = (value) => {
    const cleaned = value.replace(/\D/g, '') // Remove tudo que não for número

    let formatted = ''
    if (cleaned.length > 0) {
      formatted = cleaned.substring(0, 2)
    }
    if (cleaned.length > 2) {
      formatted += '/' + cleaned.substring(2, 4)
    }
    if (cleaned.length > 4) {
      formatted += '/' + cleaned.substring(4, 8)
    }

    return formatted
  }
  
  const handlePhoneChange = (event) => {
    const rawValue = event.target.value 
    const formatted = formatPhoneNumber(rawValue)
    setTelefone(formatted)
  }

  const handleDateChange = (event) => {
    const formatted = formatDate(event.target.value)
    setDataNascimento(formatted)
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="border border-primary p-4 rounded">
            <h3 className="text-primary mb-3">Nova Cliente</h3>

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
                />
              </div>

              {/* telefone */}
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">+55</span>
                  <input 
                    className="form-control" 
                    type="text"
                    name="telefone" 
                    placeholder="Telefone"
                    value={telefone}
                    onChange={handlePhoneChange}
                    maxLength="15"
                    required 
                  />
                </div>
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
            
              {/* data nascimento */}
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="text"
                  name="datanascimento" 
                  placeholder='dd/mm/aaaa'
                  value={dataNascimento}
                  onChange={handleDateChange}
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

export default Clientes
