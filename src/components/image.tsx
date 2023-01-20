import NextImage from "next/image";

type LoaderProps = {
  src: string;
};

type ImageProps = {
  alt: string;
  className?: string;
  height?: number;
  src: string;
  width?: number;
};

function loader({ src }: LoaderProps) {
  return `${src}`;
}

export default function Image({
  alt,
  className,
  height,
  src,
  width,
}: ImageProps) {
  return (
    <NextImage
      loader={loader}
      unoptimized={true}
      alt={alt}
      className={className}
      height={height}
      src={src}
      width={width}
    />
  );
}
