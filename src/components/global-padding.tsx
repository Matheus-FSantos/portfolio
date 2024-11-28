interface IGlobalPadding {
	children: React.ReactNode
}

const GlobalPadding = ({ children }: IGlobalPadding): React.ReactElement => {
	return (
		<div className="px-5 max-w-[1920px] w-full mx-auto my-0 sm:px-10">
			{ children }
		</div>
	);
}

export { GlobalPadding };
