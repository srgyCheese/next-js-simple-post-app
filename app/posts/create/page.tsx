'use client'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { postSchema } from '@/zodSchemas/postSchema'
import { z } from 'zod'

type Inputs = z.infer<typeof postSchema>

const CreatePostForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(postSchema)
  })
  
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
      <input 
        placeholder='Title' 
        className='border border-slate-400 rounded p-2 text-slate-900'
        {...register('title')} 
      />
      {errors.title && <small className='text-red-400'>{errors.title.message}</small>}

      <textarea 
        placeholder='Content' 
        className='border border-slate-400 rounded p-2 text-slate-900' 
        {...register('content')} 
      />
      {errors.content && <small className='text-red-400'>{errors.content.message}</small>}

      <input type="submit" value='Create post' className='cursor-pointer bg-gradient-to-r from-indigo-900 to-slate-800 p-4 rounded' />
    </form>
  )
}

const CreatePost = () => {
  return (
    <div className='p-4'>
      <CreatePostForm />
    </div>
  )
}

export default CreatePost