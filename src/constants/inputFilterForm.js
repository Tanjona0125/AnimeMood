export const inputFilterForm = [
  {
    label: 'Types',
    placeholder: "Types d'animes favoris",
    types: 'select',
    input: [
      {
        name: 'tv',
        value: 'tv',
      },
      {
        name: 'movie',
        value: 'movie',
      },
      {
        name: 'ova',
        value: 'ova',
      },
      {
        name: 'special',
        value: 'special',
      },
      {
        name: 'ona',
        value: 'ona',
      },
      {
        name: 'music',
        value: 'music',
      },
      {
        name: 'cm',
        value: 'cm',
      },
      {
        name: 'pv',
        value: 'pv',
      },
      {
        name: 'tv special',
        value: 'tv_special',
      },
    ]
  },
  {
    label: 'Types',
    placeholder: "Types d'animes favoris",
    types: 'select',
    input: [
      {
        name: 'airing',
        value: 'airing',
      },
      {
        name: 'complete',
        value: 'complete',
      },
      {
        name: 'upcoming',
        value: 'upcoming',
      },
    ]
  },
  {
    label: "Audience",
    placeholder: "Type d'audience",
    types: 'select',

    input: [
      {
        name: 'G - All Ages',
        value: 'g',
      },
      {
        name: 'PG - Children',
        value: 'pg',
      },
      {
        name: 'PG-13 - Teens 13 or older',
        value: 'pg13',
      },
      {
        name: 'R - 17+ (violence & profanity)',
        value: 'r17',
      },
      {
        name: 'R+ - Mild Nudity',
        value: 'r',
      },
      {
        name: 'Rx - Hentai',
        value: 'rx',
      },
    ]
  },
  {
    label: "Trier par",
    placeholder: "Ordre de trie des resultats",
    types: 'select',
    input: [
      {
        name: 'Titre',
        value: 'title',
      },
      {
        name: 'Date de debut',
        value: 'start_date',
      },
      {
        name: 'Date de fin',
        value: 'end_date',
      },
      {
        name: 'Episodes',
        value: 'episodes',
      },
      {
        name: 'Score',
        value: 'score',
      },
      {
        name: 'Score par',
        value: 'scored_by',
      },
      {
        name: 'Rang',
        value: 'rank',
      },
      {
        name: 'Popularite',
        value: 'popularity',
      },
      {
        name: 'Membre',
        value: 'members',
      },
      {
        name: 'Favoris',
        value: 'favorites',
      },
    ]
  },
  {
    label: "Contenue safe (sfw).",
    name: "sfw",
    types: 'checkbox',
  }
]