import { User } from '../../../user/user'
import { BackendWrapper } from './styles'

const backendTechs = [
	'node',
	'express',
	'fastify',
	'relational databases (SQLite, MySQL, PostgreSQL)',
	'non-relational databases (MongoDB)',
	'knex',
	'prisma',
	'spring-boot',
]

export function Backend() {
	return (
		<BackendWrapper>
			{backendTechs.map(backendTech => {
				return (
					<div key={backendTech}>
						<User route='techs/back-end' />
						<p>{backendTech}</p>
					</div>
				)
			})}
		</BackendWrapper>
	)
}