import { useMemo } from 'react'
import type { SortKeys, TodoProps } from '../Types/todo'

export const useSortedPosts = (
  list: TodoProps[],
  selectedSort: SortKeys | ''
): TodoProps[] => {
  return useMemo(() => {
    if (selectedSort) {
      return [...list].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      )
    }
    return list
  }, [selectedSort, list])
}

export const usePosts = (
  searchQuery: string,
  list: TodoProps[],
  selectedSort: SortKeys | ''
): TodoProps[] => {
  const sortedPost = useSortedPosts(list, selectedSort)
  return useMemo(() => {
    return sortedPost.filter((item) =>
      item.taskName.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [sortedPost, searchQuery])
}
