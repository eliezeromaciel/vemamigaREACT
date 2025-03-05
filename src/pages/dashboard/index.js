import {React, useState} from 'react'




const Dashboard = () => {
  
  const [telefone, setTelefone] = useState('')
  
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '')
  
    if (phoneNumber.length <= 10) {
      return `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 6)}-${phoneNumber.substring(6, 10)}`
    } else {
      return `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7, 11)}`
    }
  }
  
  const handlePhoneChange = (event) => {
    const formatted = formatPhoneNumber(event.target.value)
    setTelefone(formatted)
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="border border-primary p-4 rounded">
            <h3 className="text-primary mb-3">Nova Cliente</h3>

            <form className="needs-validation" noValidate>
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="text"
                  name="nome" 
                  placeholder="Nome"
                  required 
                />
              </div>

              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="tel"
                  name="telefone" 
                  placeholder="Telefone"
                  required 
                />
              </div>
            
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="text"
                  name="instagram" 
                  placeholder="Instagram"
                  required 
                />
              </div>

              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="date"
                  name="datanascimento" 
                  required 
                />
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">+55</span>
                  <input 
                    className="form-control" 
                    type="tel"
                    name="telefone" 
                    placeholder="(XX) XXXXX-XXXX"
                    value={telefone}
                    onChange={handlePhoneChange}
                    maxLength="15"
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
