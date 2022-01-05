import {mount} from '@vue/test-utils'
import {nextTick} from 'vue';

describe('HelloWorld', () => {

	const {'./HelloWorld.vue': {default: HelloWorld}} = import.meta.globEager('./HelloWorld.vue');

	test('should render', () => {
		const wrapper = mount(HelloWorld, {props: {msg: 'dasdsad'}});

		expect(wrapper.findComponent('HelloWorld')).toBeDefined();
	});

	test('should render msg', () => {
		const wrapper = mount(HelloWorld, {props: {msg: 'my test'}});

		expect(wrapper.find('h1').text()).toBe('my test');
	});

	test('should show zero in counter', () => {
		const wrapper = mount(HelloWorld, {props: {msg: 'my test'}});

		expect(wrapper.find('button').text()).toBe('count is: 0');
	});

	test('should show 1 in counter', async () => {
		const wrapper = mount(HelloWorld, {props: {msg: 'my test'}});

		expect(wrapper.find('button').text()).toBe('count is: 0');

		await wrapper.find('button').trigger('click');

		await nextTick();

		expect(wrapper.find('button').text()).toBe('count is: 1');

		expect(wrapper.html()).toMatchSnapshot();

	});
})
