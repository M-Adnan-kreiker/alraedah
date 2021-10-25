// import Vuex from 'vuex';
// import OpenReplay from '@openreplay/tracker/cjs';
// // @ts-ignore
// import trackerVuex from '@openreplay/tracker-vuex/cjs';
// //...
// const tracker = new OpenReplay({
// 	projectKey: 'ptApJJm32giY5X4e0tSU',
// });
// const vuexPlugin = tracker.use(
// 	trackerVuex({
// 		filter(mutation: any, state: any) {
// 			// returns `true` if a mutation should be logged
// 			// `mutation` is a `{ type, payload }`
// 			return mutation.type !== 'aBlacklistedMutation';
// 		},
// 		transformer(state: any) {
// 			// transforms the state before logging it.
// 			// for example return only a specific sub-tree
// 			return state.subTree;
// 		},
// 		mutationTransformer(mutation: any) {
// 			// mutations are logged in the format of `{ type, payload }`
// 			// we can format it any way we want.
// 			return mutation.type;
// 		},
// 	})
// );
// const store = new Vuex.Store({
// 	//...
// 	// @ts-ignore
// 	plugins: [vuexPlugin],
// });
