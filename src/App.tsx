import { ThemeProvider } from "@/components/theme-provider";
import { Routes } from "@/routes";
import { EmojiProvider } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json"


const App = (): React.ReactElement => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<EmojiProvider data={ emojiData }>
				<Routes />
			</EmojiProvider>
    </ThemeProvider>
  )
}

export { App };
