interface IGlobalPadding {
	children: React.ReactElement
}

const GlobalPadding = ({ children }: IGlobalPadding): React.ReactElement => {
	return (
		<div className="px-10">
			{ children }
		</div>
	);
}

export { GlobalPadding };
