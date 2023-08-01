import { Box, Center, IconButton, Text } from "@chakra-ui/react"
import { Icon24LogoVkOutline } from "@vkontakte/icons"
import { about as database } from "databases"
import { getLocaled } from "modules"
import Link from "next/link"
import { BiLogoGithub, BiLogoTelegram } from "react-icons/bi"
import { HiOutlineMail } from "react-icons/hi"

export default function Footer() {
  const about = getLocaled(database)

  const icons = {
    vk: <Icon24LogoVkOutline />,
    telegram: <BiLogoTelegram />,
    email: <HiOutlineMail />,
    github: <BiLogoGithub />
  }

  return <Box as="footer">
    <Center flexDirection="column">
      <Text>{getLocaled({ ru: "Возникла ошибка? Напиши мне", en: "An error occurred? Write me" })}</Text>
      <Box>
        {
          about.map(({ category, name, title, url }) =>
            category === "developer" &&
            <Link key={name} target="_blank" href={url}>
              <IconButton margin={1} icon={icons[name]} aria-label={title} />
            </Link>
          )
        }
      </Box>
    </Center>
  </Box>
}