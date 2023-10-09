export interface UploadProps {
  fileName: string
  fileType: string
  body: Buffer
}

export abstract class Uploader {
  abstract upload(params: UploadProps): Promise<{ url: string }>
}
