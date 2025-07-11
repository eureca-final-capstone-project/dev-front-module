import { useMutation } from '@tanstack/react-query'
import postTest from '../apis/postTest'

const PostTestPage = () => {
  const mutation = useMutation({
    mutationFn: postTest,
    onSuccess: data => {
      console.log('post 요청 성공:', data)
    },
    onError: error => {
      console.error('post 요청 실패:', error)
    },
  })

  const handlePost = () => {
    mutation.mutate()
  }

  return <button onClick={handlePost}>post 요청 테스트 버튼</button>
}

export default PostTestPage
