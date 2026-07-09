import type { PageLoad } from './$types';

export interface UsatoContent {
  _uid: string;
  titolo: string;
  sottotitolo: string;
  marca: string;
  anno: string | number;
  galleria: Immagine[];
  immagine: Immagine;
  component: string;
  descrizione: any;
  attivo: boolean;
  _editable?: string;
}

export interface Immagine {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: any;
  is_external_url: boolean;
}

export const load: PageLoad = async ({ parent }) => {
  const { storyblokAPI } = await parent();

  interface UsatoStory {
    name: string;
    slug: string;
    published_at: string | null;
    content: UsatoContent;
  }

  const response = await storyblokAPI.get('cdn/stories', {
    version: 'draft',
    per_page: 100,
    filter_query: {
      component: {
        in: 'Usato',
      },
    },
  });

  // In vetrina solo gli annunci attivi (non venduti).
  const stories = (response.data.stories as UsatoStory[]).filter((s) => s.content.attivo);

  return {
    stories,
  };
};
