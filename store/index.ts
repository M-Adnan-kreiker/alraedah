import { Store } from 'vuex';
import { getModule } from 'nuxt-property-decorator';

/**
 * Import, define and export all modules.
 */

import Products from './modules/products';
import Leads from './modules/leads';

export let productsStore: Products;
export let leadsStore: Leads;

/**
 * A Vuex plugin that sets up the imported modules.
 */
const initializer = (store: Store<any>) => {
	productsStore = getModule(Products, store);
	leadsStore = getModule(Leads, store);
};
export const plugins = [initializer];

/**
 * All modules can be imported directly from the store.
 */
