import {createLocalVue, mount} from "@vue/test-utils";
import AddGame from "@/views/AddGame";
import Vuetify from "vuetify";

describe('game creation', () => {
  let wrapper;
  let mockSave;
  let vuetify;

  jest.mock('axios', () => ({
    post: Promise.resolve()
  }))

  beforeEach(() => {
    vuetify = new Vuetify();
    mockSave = jest.spyOn(AddGame.methods, 'saveGame');

    wrapper = mount(AddGame, {
      localVue: createLocalVue(),
      vuetify,
    });

  })

  it('renders with expected HTML structure', () => {
    expect(wrapper.element).toMatchSnapshot();
  })

  it('submits form', async () => {
    await wrapper.find('input[data-test=name').setValue('game name');
    await wrapper.find('input[data-test=platform').setValue('platform');
    await wrapper.find('input[data-test=publisher').setValue('publisher');
    await wrapper.find('input[data-test=genre').setValue('genre');
    await wrapper.find('input[data-test=numberOfPlayers').setValue('numberOfPlayers');
    await wrapper.find('input[data-test=release-date').setValue('releaseDate');

    await wrapper.find('.v-form').trigger('submit.prevent');

    expect(mockSave).toHaveBeenCalled()
  })
})