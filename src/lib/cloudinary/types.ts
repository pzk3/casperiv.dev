export interface TCloudinaryImage {
  public_id: string;
  asset_id: string;
  folder?: string;
  format: string;
  width: number;
  height: number;
  secure_url: string;
  alt: string;
  placeholderData: string | null;
}
