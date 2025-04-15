import api from './api'

export const getConsumidores = async ( ) => {
  const resp = await api.get('/consumidores')
  return resp
}

export const getConsumidorById = async ({idCliente} ) => {
  const resp = await api.get(`/consumidor/${idCliente}`)
  return resp
}