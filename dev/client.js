import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag';
import WebSocket from 'ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import addGraphQLSubscriptions from './subscriptions';
import { GRAPHQL_PATH, USERNAME, PASSWORD } from './config';

const wsClient = new SubscriptionClient('ws://localhost:5000', {
	reconnect: true,
	connectionParams: {
		accessToken: 'jkasdhkjashd jkashdjk ashdas'
	}
}, WebSocket);


const networkInterface = createNetworkInterface({
	uri: GRAPHQL_PATH,
	opts: {
		credentials: 'same-origin'
	}
});


const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
	networkInterface,
	wsClient,
);


const client = new ApolloClient({
	connectToDevTools: true,
	dataIdFromObject: o => o.id,
	networkInterface: networkInterfaceWithSubscriptions
});

// console.log('ApolloClient : ', client);

networkInterface.use([{
	applyMiddleware(req, next) {
		if (!req.options.headers) {
			req.options.headers = {};  // Create the header object if needed.
		}
   // get the authentication token from local storage if it exists
		// get the authentication token from local storage if it exists
		const token = localStorage.getItem('sessionToken');
		req.options.headers.Authorization = token ? `${token}` : null;
		next();
	}
}]);


const mutation = gql`mutation LoginMutation ($credentials:JSON){
    Account{
        AccountLogin (input:{credentials: $credentials}){
            obj
            clientMutationId
        }
    }

}`;

client.mutate({
	mutation,
	variables: {
		credentials:{
			email:USERNAME,
			password:PASSWORD
		}
	}
}).then((data, loading) => {
	console.log(data);

	try {

		const token = data.data.Account.AccountLogin.obj.id;  // sessionToken , accesstoken
		localStorage.setItem('sessionToken', token);
	} catch (e) {
		console.log('Error logging in', e);
	}
});
export default client;