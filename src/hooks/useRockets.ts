import { useSelector } from 'react-redux'

import { AppState } from 'store'

const useRockets = () => {
  const { rockets } = useSelector((state: AppState) => state)

  return { rockets }
}

export default useRockets
