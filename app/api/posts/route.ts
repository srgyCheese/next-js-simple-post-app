import { prisma } from "@/server/db"
import { postSchema } from "@/zodSchemas/postSchema"
import { NextResponse } from "next/server"
import { authOptions, getSession } from "@/server/auth"

export const GET = async (req: Request) => {
  const posts = await prisma.post.findMany({
    take: 100,
    include: {
      user: true
    },
    orderBy: [{id: 'desc'}]
  })

  return NextResponse.json({
    posts
  })
}

export const POST = async (req: Request) => {
  const body = await req.json()
  
  const parsedPost = postSchema.safeParse(body)

  if (!parsedPost.success) {
    return NextResponse.json(parsedPost.error.format())
  }
  
  const session = await getSession()

  if (!session?.user) {
    return new Response(JSON.stringify({
      message: 'Unauthorized'
    }), {
      status: 401
    })
  }

  const newPost = await prisma.post.create({
    data: {
      ...parsedPost.data,
      userId: session.user.id
    }
  })

  return NextResponse.json({
    post: newPost
  })
}