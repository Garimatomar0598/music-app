
export default function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <>
  
      
        <h2>Nav Item</h2>
        
      {children}
      </>

  );
}
