import Meta from '@/components/Meta'
 
export default function Layout({ children }) {
  return (
    <html lang="en">
       <Meta />
      <body>{children}</body>
    </html>
  )
}