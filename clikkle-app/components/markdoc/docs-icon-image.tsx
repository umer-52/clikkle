const SIZES: Record<string, string> = {
  s: "16px",
  m: "20px",
  l: "32px",
  xl: "40px",
};

/** Appwrite `Icon_Image.svelte` */
export function DocsIconImage({
  src,
  alt,
  size = "s",
}: {
  src: string;
  alt: string;
  size?: string;
}) {
  const dim = SIZES[size] ?? SIZES.s;
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      width={dim}
      height={dim}
      style={{
        width: dim,
        height: dim,
        verticalAlign: "middle",
        minWidth: dim,
      }}
    />
  );
}
