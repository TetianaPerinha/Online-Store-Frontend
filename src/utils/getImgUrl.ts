import { StaticImageData } from 'next/image'

const MINIO_URL_STUB = 'default file'

export default function getImgUrl(
  minioUrl: string | null,
  localImage: StaticImageData,
): string | StaticImageData {
  if (typeof minioUrl === 'string' && minioUrl != MINIO_URL_STUB) {
    // Uncomment when img loading optimization is ready
    // return minioUrl
  }

  return localImage
}
