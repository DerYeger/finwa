import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import PieChart from '~/components/atoms/PieChart.vue'

const TestComponent = {
  components: { PieChart },
  template: '<div><pie-chart :chart-data="chartData" /></div>',
  data() {
    return {
      chartData: {
        labels: ['First', 'Second'],
        datasets: [
          {
            label: 'Test',
            data: [0, 1],
          },
        ],
      },
    }
  },
}

describe('PieChart', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('is a Vue instance', () => {
    const wrapper = mount(TestComponent, {
      vuetify,
    })
    expect(wrapper.vm).toBeTruthy()
    const graphContainer = wrapper.vm.$el.querySelector('.responsive-graph')
    expect(graphContainer).not.toBeNull()
    const graph = graphContainer.querySelector('canvas')
    expect(graph).not.toBeNull()
  })
})
