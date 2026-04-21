"use client";
import NextImage, { ImageProps as NextImageProps } from "next/image";

export interface ImageProps extends NextImageProps {
  alt: string;
  className?: string;
}

export function UserAvatar({ src, name }: { src: string; name: string }) {
  return (
    <Image
      src={src}
      alt={name}
      width={40}
      height={40}
      className="rounded-full"
    />
  );
}

export function Image({ alt, className, ...props }: ImageProps) {
  return (
    <NextImage
      alt={alt}
      className={className}
      {...props}
    />
  );
}

