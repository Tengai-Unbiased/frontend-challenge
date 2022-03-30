import { shallowMount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg: string = 'new message'
    const wrapper:Wrapper<Vue> = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
