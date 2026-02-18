import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      global: {
        stubs: {
          RouterLink: true,
          ServiceCard: true,
        },
      },
    })
    expect(wrapper.text()).toContain('Innovative Software')
  })
})
