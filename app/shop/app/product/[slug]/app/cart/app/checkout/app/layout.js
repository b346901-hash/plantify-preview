export const metadata = {
  title: "Plantify",
  description: "Premium indoor plants with sustainable impact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "serif", background: "#F7F5F0" }}>
        {children}
      </body>
    </html>
  );
}
