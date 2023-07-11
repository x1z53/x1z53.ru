import { Card, CardBody, CardHeader, Heading, SimpleGrid } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function CardGrid({ cardWidth = "300px", isExternal, cards }: { cardWidth?: string, isExternal?: boolean, cards: { title: string, description: string, name: string, url: string }[] }) {
  const { asPath } = useRouter()
  return <SimpleGrid spacing="4" templateColumns={`repeat(auto-fill, minmax(${cardWidth}, 1fr))`}>
    {cards.map(({ title, description, name, url }) => (
      <Card key={name} size="sm" justify="center">
        <Link href={url || `${asPath}/${name}`} target={isExternal && "_blank"}>
          <CardHeader textAlign="center" justifyContent="center">
            <Heading size="md">{title}</Heading>
          </CardHeader>
          <CardBody textAlign="center" justifyContent="center">{description || url}</CardBody>
        </Link>
      </Card>
    ))}
  </SimpleGrid >
}