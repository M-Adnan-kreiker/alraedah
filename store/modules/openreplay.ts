// import {
// 	Module,
// 	VuexAction,
// 	VuexModule,
// 	VuexMutation,
// } from 'nuxt-property-decorator';
// import OpenReplay from '@openreplay/tracker/cjs';
// import trackerVuex from '@openreplay/tracker-vuex/cjs';
// //...
// const tracker = new OpenReplay({
//   projectKey: 'ptApJJm32giY5X4e0tSU'
// });
// const vuexPlugin = tracker.use(trackerVuex({
//   filter (mutation, state) {
//     // returns `true` if a mutation should be logged
//     // `mutation` is a `{ type, payload }`
//     return mutation.type !== "aBlacklistedMutation";
//   },
//   transformer (state) {
//     // transforms the state before logging it.
//     // for example return only a specific sub-tree
//     return state.subTree;
//   },
//   mutationTransformer (mutation) {
//     // mutations are logged in the format of `{ type, payload }`
//     // we can format it any way we want.
//     return mutation.type;
//   },));  // check list of available options below
// const store = new Vuex.Store({
//     //...
//     plugins: [vuexPlugin],
//   });
// }
// @Module({
// 	name: 'modules/openreplay',
// 	stateFactory: true,
// 	namespaced: true,
// })
// export default class Openreplay extends VuexModule {

// }
