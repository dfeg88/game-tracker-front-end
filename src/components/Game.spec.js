import {createLocalVue, shallowMount} from "@vue/test-utils";
import Vuetify from "vuetify";
import Game from "@/components/Game";

let wrapper;
const vuetify = new Vuetify();

describe('Game', function () {

  beforeEach(() => {
    wrapper = shallowMount(Game, {
      localVue: createLocalVue(),
      vuetify,
      propsData: {
        game: {
          name: 'name',
          platform: 'platform',
          genre: 'genre',
          releaseDate: '01-01-2020',
          numberOfPlayers: 8,
          publisher: 'publisher',
        }
      }
    })
  })

  it('renders expected HTML structure', () => {
    expect(wrapper.elements).toMatchSnapshot();
  })

  it('renders values from props', () => {
    expect(wrapper.find('#game-name').text()).toBe('name');
    expect(wrapper.find('#platform').text()).toBe('Platform: platform');
    expect(wrapper.find('#genre').text()).toBe('Genre: genre');
    expect(wrapper.find('#release-date').text()).toBe('Release Date: Wed Jan 01 2020');
    expect(wrapper.find('#number-of-players').text()).toBe('Number of Players: 8');
    expect(wrapper.find('#publisher').text()).toBe('Publisher: publisher');
  })
});