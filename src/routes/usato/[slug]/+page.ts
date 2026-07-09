import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { UsatoContent } from '../+page';

interface UsatoDetailStory {
  name: string;
  created_at: string;
  published_at: string;
  updated_at: string;
  id: number;
  uuid: string;
  content: UsatoContent;
  slug: string;
  full_slug: string;
  sort_by_date: string | null;
  position: number;
  tag_list: string[];
  is_startpage: boolean;
  parent_id: number;
  meta_data: any;
  group_id: string;
  first_published_at: string;
  release_id: string | null;
  lang: string;
  path: string | null;
  alternates: any[];
  default_full_slug: string | null;
  translated_slugs: any;
}

export const load: PageLoad = async ({ params, parent }) => {
  const { storyblokAPI } = await parent();

  // Gli annunci "Usato" vivono nella cartella "usato/" su Storyblok, quindi
  // recuperiamo direttamente la singola story tramite il suo full slug.
  const response = await storyblokAPI
    .get(`cdn/stories/usato/${params.slug}`, {
      version: 'draft',
    })
    .catch(() => null);

  if (!response) {
    error(404, 'Annuncio non trovato');
  }

  const usato = response.data.story as UsatoDetailStory;

  // Sidebar: altri annunci ancora disponibili, escluso quello corrente.
  const sidebarResponse = await storyblokAPI
    .get('cdn/stories', {
      version: 'draft',
      starts_with: 'usato/',
      per_page: 100,
      sort_by: 'published_at:desc',
      filter_query: {
        component: { in: 'Usato' },
      },
    })
    .catch(() => null);

  const sidebarStories = (sidebarResponse?.data.stories ?? []) as UsatoDetailStory[];
  const latestUsati = sidebarStories
    .filter((s) => s.content.attivo && s.slug !== params.slug)
    .slice(0, 3);

  return {
    usato,
    latestUsati,
  };
};
