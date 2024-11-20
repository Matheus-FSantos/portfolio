import { ThemeProvider } from "@/components/theme-provider";
import { Routes } from "@/routes";
import { EmojiProvider } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json"
import { GlobalPadding } from "./components/global-padding";


const App = (): React.ReactElement => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<EmojiProvider data={ emojiData }>
				<GlobalPadding>
      		<Routes />
				</GlobalPadding>
			</EmojiProvider>
    </ThemeProvider>
  )
}

export { App };
