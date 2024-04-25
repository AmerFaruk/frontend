

export const metadata = {
  title: 'Noisy RRSS',
  description: 'Discover Our World!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
