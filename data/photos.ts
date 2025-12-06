export type Photo = {
  id: number;
  title: string;
  thumb: string;
  full: string;
  description: string;
};

export const photos: Photo[] = [
  {
    id: 1,
    title: 'Sunset over the hills',
    thumb:
      'https://images.pexels.com/photos/754949/pexels-photo-754949.jpeg?auto=compress&w=400',
    full: 'https://images.pexels.com/photos/754949/pexels-photo-754949.jpeg?auto=compress&w=1200',
    description: 'Winter scene'
  },
  {
    id: 2,
    title: 'City lights at night',
    thumb:
      'https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&w=400',
    full: 'https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&w=1200',
    description:
      'Neon reflections, streaks of light, and the subtle chaos of a city refusing to sleep.'
  },
  {
    id: 3,
    title: 'Forest trail',
    thumb:
      'https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&w=400',
    full: 'https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&w=1200',
    description:
      'A quiet path through a dense forest, where the only algorithm is the way the trees filter the light.'
  }
];
