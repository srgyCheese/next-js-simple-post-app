'use client'
import PostCard from "@/components/PostCard"
import { useFetchAllPostsQuery } from "@/store/services/post"
import Scrollbars from "react-custom-scrollbars-2"

export default function Home() {
  const postsQuery = useFetchAllPostsQuery(1)

  if (postsQuery.isLoading) {
    return (
      <div className="p-4 text-center">
        Loading...
      </div>
    )
  }

  const posts = postsQuery.data?.posts

  return (
    <Scrollbars>
      <div className="p-4 flex flex-col gap-2">
        {posts?.length === 0
          ? 'No data'
          : posts?.map(post => <PostCard post={post} />)
        }
      </div>
    </Scrollbars>
  )
}
