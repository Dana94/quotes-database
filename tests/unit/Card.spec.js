import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import Card from '@/components/Cards/Card/Card.vue';

const localVue = createLocalVue()

localVue.use(Vuex);

describe('Card.vue', () => {
    let getters;
    let store;

    beforeEach(() => {
        getters = {
            theme: () => 'light',
        }

        store = new Vuex.Store({
            getters
        })
    })

    it('Card color is from light theme', () => {
        // const theme = 'light';
        const wrapper = shallowMount(Card, {
            propsData: {
                id: 2
            },
            store,
            localVue
        });
        const el = wrapper.find('.under-card');
        expect(el.classes()).toContain('pink');
    })
    // it('Card color changes in dark theme', () => {
    //     const theme = 'dark';
    //     const wrapper = shallowMount(Cards);

    //     expect(wrapper.html()).toContain('Quotes Database');
    // })
})
