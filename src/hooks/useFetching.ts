// hooks/useFetching.ts
import { useState } from 'react'

export const useFetching = (
  callback: () => Promise<void>
): [() => Promise<void>, boolean, string] => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching = async () => {
    try {
      setIsLoading(true)
      await callback()
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      } else {
        setError('Unexpected error')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error]
}
