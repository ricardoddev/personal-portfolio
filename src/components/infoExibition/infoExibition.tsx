import { Outlet, useLocation } from 'react-router-dom'
import { InfoExibitionWrapper, IsHomeContent } from './styles'
import Ricardo from '../../assets/ricardo-delgado-pixel.png'

export function InfoExibition() {
	const location = useLocation()

	const isHomePage = location.pathname === '/'

	return (
		<InfoExibitionWrapper>
			{isHomePage ? (
				<IsHomeContent>
					<img src={Ricardo} alt="" />

					<div>
						<h1>Ricardo Delgado</h1>
						<h2>fullstack developer</h2>
					</div>
				</IsHomeContent>
			) : (
				<Outlet />
			)}

		</InfoExibitionWrapper>
	)
}