import Avatar from '../components/avatar'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  authorName,
  authorAvatar,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        {coverImage}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        {date}
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={authorName} picture={authorAvatar} />
    </div>
  )
}
