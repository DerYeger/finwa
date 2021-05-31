import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import PieChart from '~/components/charts/PieChart.vue'

describe('PieChart', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('is a Vue instance', () => {
    const wrapper = mount(PieChart, {
      vuetify,
      propsData: {
        chartData: {
          labels: ['First', 'Second'],
          datasets: [
            {
              label: 'Test',
              data: [0, 1],
            },
          ],
        },
      },
    })
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.vm.$el.querySelector('.pie-charts')).not.toBe(undefined)
  })
})
