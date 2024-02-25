import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.ENCB',
  appName: 'ENCB',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
