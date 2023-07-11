import { CardGrid } from "components/layout"
import getDatabase from "modules/hooks/getDatabase"

export default function CiphersIndexPage() {
  const ciphers = getDatabase("ciphers")
  return <CardGrid cards={ciphers} />
}