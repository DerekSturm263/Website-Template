import { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "@/app/theme";

export const metadata: Metadata = {
  title: "Title",
  description: "Description",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          
          <body>
            {children}
          </body>
        </ThemeProvider>
      </html>
  );
}
