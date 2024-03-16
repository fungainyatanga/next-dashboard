import '@/app/ui/global.css';
import { inter } from './ui/fonts/inter';
import { SpeedInsights } from '@vercel/speed-insights/next';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}<SpeedInsights/></body>
    </html>
  );
}
