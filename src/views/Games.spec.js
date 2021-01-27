import {createLocalVue, mount} from "@vue/test-utils";
import Vuetify from "vuetify";
import Games from "@/views/Games";
import * as Api from '@/service/Api'

let wrapper;
const vuetify = new Vuetify();

describe('Games', () => {
  let get = jest.fn(() => Promise.resolve(
    {
      data: [
        {
          name: 'name',
          platform: 'platform',
          genre: 'genre',
          releaseDate: '01-01-2020',
          numberOfPlayers: 8,
          publisher: 'publisher',
        }
      ]
    }))

  Api.api = () => ({get})

  beforeEach(() => {
    wrapper = mount(Games, {
      localVue: createLocalVue(),
      vuetify,
      data() {
        return {
          games: []
        }
      }
    })
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('renders expected HTML', () => {
    expect(wrapper.elements).toMatchSnapshot();
  })

  it('displays games', async () => {
    expect(wrapper.vm.$data.games.length).toBe(1)
    expect(wrapper.find('#name-platform').exists).toBeTruthy();
  })

});