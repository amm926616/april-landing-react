export interface Platform {
  name: string;
  icon: React.ReactNode;
  downloadUrl: string;
  systemRequirements: string[];
  size: string;
  version: string;
}
