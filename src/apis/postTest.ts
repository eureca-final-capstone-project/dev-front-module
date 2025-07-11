import api from './api'

const postTest = async <T>(payload?: T) => {
  const response = await api.post('/orchestrator/test', payload ?? {})
  return response.data
}

export default postTest
