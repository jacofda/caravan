import type { PageLoad } from './$types';

export interface CaravanContent {
  _uid: string;
  porte: string;
  misure: string;
  finestre: string;
  component: string;
  descrizione: any;
  type: string;
  content: any;
  peso_totale: string;
  posti_letto: string;
  altezza_caravan: string;
  altezza_interni: string;
}

export const load: PageLoad = async ({ parent }) => {
  const { storyblokAPI } = await parent();

  interface CaravanStory {
    name: string;
    slug: string;
    content: CaravanContent;
  }

  const response = await storyblokAPI.get('cdn/stories', {
    version: 'draft',
    per_page: 40,
    filter_query: {
      component: {
        in: 'Caravan',
      },
    },
  });

  return {
    stories: response.data.stories as CaravanStory[],
  };
};
