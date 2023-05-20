import { PostWithUser } from "@/types/postsTypes"
import type { PostSchema } from "@/zodSchemas/postSchema"
import type { Post, User } from "@prisma/client"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

export const postApi = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: ['posts'],
  endpoints: (build) => ({
    fetchAllPosts: build.query<{posts: PostWithUser[]}, number>({
      query: () => ({
        url: `/posts`,
      }),
      providesTags: result => ['posts']
    }),
    createPost: build.mutation<{post: Post}, PostSchema>({
      query: (post) => ({
        url: `/posts`,
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['posts']
    }),
    updatePost: build.mutation<Post, Post>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: ['posts']
    }),
    deletePost: build.mutation<Post, Post>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['posts']
    }),
  })
})

export const {
  useCreatePostMutation, 
  useDeletePostMutation,
  useFetchAllPostsQuery,
  useUpdatePostMutation
} = postApi