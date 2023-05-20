import { PostWithUser } from '@/types/postsTypes';
import Image from 'next/image';
import React from 'react'

type Props = {
  post: PostWithUser
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <div key={post.id} className="flex flex-wrap gap-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-900 dark:hover:bg-gray-900">
      <div className='w-full'>{post.user.name}</div>
      <div>
        {post.user?.image && <Image src={post.user.image} alt='User photo' height={60} width={60} className='rounded-full' />}
      </div>
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{post.content}</p>
      </div>
    </div>
  )
}

export default PostCard