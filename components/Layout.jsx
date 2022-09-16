import Head from 'next/head'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Huddle</title>
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout
