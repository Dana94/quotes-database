import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
    it.skip('renders at least 1 quote', () => {
        const wrapper = shallowMount(App);
        expect(wrapper.html()).toContain('Quotes Database');
    })
})
