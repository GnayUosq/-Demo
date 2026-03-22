export interface MovieQuote {
  id: string;
  movieTitle: string;
  quote: string;
  rating: number;
  tags: string[];
  imageUrl: string;
  interactionScore: number;
}

export const MOVIE_QUOTES: MovieQuote[] = [
  {
    id: '1',
    movieTitle: '花样年华',
    quote: '如果多一张船票，你愿不愿意跟我一起走？',
    rating: 8.7,
    tags: ['治愈', '爱情'],
    imageUrl: 'https://picsum.photos/seed/moodforlove/800/1200',
    interactionScore: 9.2,
  },
  {
    id: '2',
    movieTitle: '星际穿越',
    quote: '爱是唯一可以超越时间与空间的事物。',
    rating: 9.4,
    tags: ['科幻', '哲思'],
    imageUrl: 'https://picsum.photos/seed/interstellar/800/1200',
    interactionScore: 9.8,
  },
  {
    id: '3',
    movieTitle: '重庆森林',
    quote: '不知道从什么时候开始，在什么东西上面都有个日期，秋刀鱼会过期，肉罐头会过期，连保鲜纸都会过期，我开始怀疑，在这个世界上，还有什么东西是不会过期的？',
    rating: 8.8,
    tags: ['孤独', '文艺'],
    imageUrl: 'https://picsum.photos/seed/chungking/800/1200',
    interactionScore: 9.5,
  },
  {
    id: '4',
    movieTitle: '肖申克的救赎',
    quote: '希望是一个好东西，也许是最好的东西，而美好的事物永不消逝。',
    rating: 9.7,
    tags: ['热血', '希望'],
    imageUrl: 'https://picsum.photos/seed/shawshank/800/1200',
    interactionScore: 9.9,
  },
  {
    id: '5',
    movieTitle: '千与千寻',
    quote: '不管前方的路有多苦，只要走的方向正确，不管多么崎岖不平，都比站在原地更接近幸福。',
    rating: 9.4,
    tags: ['治愈', '成长'],
    imageUrl: 'https://picsum.photos/seed/spirited/800/1200',
    interactionScore: 9.1,
  },
];
