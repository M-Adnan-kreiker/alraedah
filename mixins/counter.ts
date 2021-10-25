import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare mixins as the same style as components.
@Component
export class Counter extends Vue {
  count: number = 0
	incrementCounter() {
		this.count++
	}
}