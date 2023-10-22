import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  title: string;
  src: string;
  slug?: string;
}

const CoverImage = ({ title, src, slug }: Props) => {
  const [imageExists, setImageExists] = useState(true);

  const handleImageError = () => {
    setImageExists(false);
  }

  const imageComponent = imageExists ? (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      onError={handleImageError}
      className={cn('shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={1300}
      height={630}
    />
  ) : (
    
    <Image src="/assets/blog/hello-world/cover.jpg" alt="Default Image" width={1300} height={630} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {imageComponent}
        </Link>
      ) : (
        imageComponent
      )}
    </div>
  );
}

export default CoverImage;
