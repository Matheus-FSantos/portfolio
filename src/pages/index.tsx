import { Header } from "@/components/header";

const Home = (): React.ReactElement => {
	return (
		<div className="">
			<Header />
			<section className="h-full">
				<div className="flex flex-col h-[700px] justify-between">
					<div className="flex flex-row items-center gap-4">
						<span className="relative flex h-2.5 w-2.5">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
						</span>	
						<div className="flex flex-col">
							<span className="font-semibold">Matheus Ferreira Santos</span>
							<span className="text-sm font-medium text-muted-foreground relative bottom-1">Back-End developer</span>
						</div>
					</div>
					<div className="flex flex-col gap-5">
						<h1 className="text-7xl">Welcome</h1>
						<h2 className="w-[750px] text-sm font-medium">
							Nice to see you! I'm Matheus, a back-end developer with expertise in front-end and mobile (Kotlin)
							and I'm always looking to transform ideas into innovative technological solutions that generate impact.
						</h2>
					</div>
				</div>
			</section>
		</div>
	);
}

export { Home };
