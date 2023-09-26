import { Flex } from "@chakra-ui/react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../components/Home"

export default function Landing(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Header />
      <Home
        title="Adapted Chakra Landing Page"
        subtitle="Used Create-React-App, Chakra UI"
        image="https://source.unsplash.com/collection/404339/800x600"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
      <Footer />
    </Flex>
  )
}
