import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Text from "@src/components/Text/Text";
import Feed from "./patterns/Feed/Feed";
import { useTheme } from "@src/theme/ThemeProvider";
import Link from "@src/components/Link/Link";
import Footer from "./patterns/Footer/Footer";


export default function HomeScreen() {
  const theme = useTheme()

  return(

    <Box tag='main'
    styleSheet={{
      backgroundColor: theme.colors.neutral.x000,
      flex: 1,
      alignItems: 'center',
    }}
    >
      <Link colorVariant="accent" href='/sobre'>
      Vá para a página Sobre
      </Link>
      <Link href='https://google.com'>
      Vá para o googlis
      </Link>
    <Background />
    <Menu />
    <Feed>
      <Feed.Header />
    </Feed>
    <Footer/>
      {/* <Menu />
      <Feed>
        <Feed.Header />
        <Text tag='h2' variant="heading1">
      Últimas atualizações
        </Text>
        <Feed.Posts />
      </Feed> */}
    </Box>

  )
}
