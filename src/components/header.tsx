import { Link,} from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "./theme-provider";
import { useState } from "react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

const Header = (): React.ReactElement => {
	const { theme } = useTheme();
	const underlineState = theme === "dark" ? "link-underline-dark" : "link-underline-light";
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

	const gapHamburgerMenuState: string = !menuIsOpen ? "gap-1.5" : "gap-0";
	const heightMenuState: string = menuIsOpen ? "h-screen" : "h-24";


	const handleOpenMenu = (): void => {
		setMenuIsOpen(!menuIsOpen);
	}

	return (
		<div className={`${ heightMenuState } bg-white/0 backdrop-blur-sm sticky top-0 left-0`}>
			<div className="flex items-center justify-between w-full py-7 relative">
				<Link to="https://github.com/Matheus-FSantos" target="__blank">
					<Github />
				</Link>
				<div className="flex gap-4 sm:flex sm:items-center sm:gap-14">
					<ul className="hidden sm:flex sm:items-center sm:gap-8">
						<li className={`cursor-pointer link-underline ${ underlineState } hover:brightness-90`}>Home</li>
						<li className={`cursor-pointer link-underline ${ underlineState } hover:brightness-90`}>About</li>
						<li className={`cursor-pointer link-underline ${ underlineState } hover:brightness-90`}>Projects</li>
						<li className={`cursor-pointer link-underline ${ underlineState } hover:brightness-90`}>Prices</li>
					</ul>
					<ModeToggle />
					<Button variant="secondary" size="icon" className={`items-center sm:hidden`} onClick={ handleOpenMenu }>
						{
							<div className={ menuIsOpen ? "relative top-[0.5px]" : `flex flex-col ${ gapHamburgerMenuState }`}>
								<div
									className="w-5 h-0.5 bg-foreground"
									style={{
										transform: menuIsOpen ? "rotate(45deg)" : "",
									}}
								/>
								<div
									className="w-5 h-0.5 bg-foreground"
									style={{
										transform: menuIsOpen ? "translateY(-2px) rotate(-45deg)" : "",
									}}
								/>
							</div>
						}
					</Button>
				</div>
				<div className={`${(!menuIsOpen && "hidden opacity-0" )} opacity-100 absolute top-40 sm:hidden`}>
					<ul className="flex flex-col gap-10">
						<li className={`text-3xl font-medium cursor-pointer hover:brightness-90`}>Home</li>
						<li className={`text-3xl font-medium cursor-pointer hover:brightness-90`}>About</li>
						<li className={`text-3xl font-medium cursor-pointer hover:brightness-90`}>Projects</li>
						<li className={`text-3xl font-medium cursor-pointer hover:brightness-90`}>Prices</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export { Header };
