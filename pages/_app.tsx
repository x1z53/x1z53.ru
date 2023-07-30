import { ChakraProvider, Container } from "@chakra-ui/react"
import { Header } from "components"
import Footer from "components/layout/Footer"
import type { AppProps } from "next/app"
import Head from "next/head"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }: AppProps) {
  const path = useRouter().asPath.split("/").slice(1).map(part => part.charAt(0).toUpperCase() + part.slice(1))
  return <ChakraProvider>
    <Head>
      <title>{path.join(" > ") || "Главная"}</title>
    </Head>
    <Header {...{ path }} />
    <Container minHeight="80vh" paddingY={5} maxWidth="container.xl">
      <Component {...pageProps} />
    </Container>
    <Footer />
  </ChakraProvider>
}