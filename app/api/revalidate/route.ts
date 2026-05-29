import { revalidateTag } from 'next/cache'

export async function POST(request: Request) {
  const secret = request.headers.get('x-revalidate-secret')
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return Response.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    const { tags } = await request.json()
    
    if (!Array.isArray(tags)) {
      return Response.json(
        { error: 'Tags must be an array' },
        { status: 400 }
      )
    }

    tags.forEach((tag: string) => revalidateTag(tag, 'max'))

    return Response.json({ revalidated: true, tags })
  } catch {
    return Response.json(
      { error: 'Failed to revalidate' },
      { status: 500 }
    )
  }
}
