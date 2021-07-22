import { resolvers as demandResolvers } from './Demand/demand';
import { resolvers as clientResolvers } from './Client/client';
import { resolvers as nodeResolvers } from './Node/Node';
import { resolvers as listResolvers } from './List/list';

const resolvers = {
	...nodeResolvers,
	...listResolvers,
	...clientResolvers,
	...demandResolvers,
	
	Query: {
		...clientResolvers.Query,
		...demandResolvers.Query,
	},

	Mutation: {
		...clientResolvers.Mutation,
	}
}

export default resolvers;