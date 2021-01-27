import Header from "@/components/Header";
import {createLocalVue, mount, shallowMount} from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

let wrapper;
const vuetify = new Vuetify();

describe('Header', () => {
  beforeEach(() => {
    wrapper = shallowMount(Header, {
      localVue,
      router,
      vuetify
    });
  })

  it('renders expect HTML', () => {
    expect(wrapper.element).toMatchSnapshot();
  })
})