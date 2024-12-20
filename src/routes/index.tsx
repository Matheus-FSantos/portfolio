import { Home } from "@/pages";
import { BrowserRouter, Routes as RoutesDom, Route } from "react-router-dom";

const Routes = (): React.ReactElement => {
	return (
		<BrowserRouter>
			<RoutesDom>
				<Route path="/portfolio" element={ <Home /> } />
			</RoutesDom>
		</BrowserRouter>
	);
}

export { Routes };
