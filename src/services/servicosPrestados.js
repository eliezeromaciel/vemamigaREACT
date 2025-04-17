import api from './api'

export const getServicosPrestados = async ( ) => {
  const resp = await api.get('/tiposServico')
  return resp
}

