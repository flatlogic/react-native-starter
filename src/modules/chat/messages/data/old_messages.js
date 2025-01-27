module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Yeah, let's do this!",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 19, 0)),
    user: {
      _id: 2,
      name: 'User',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text:
      'I was thinking about having lunch with you tonight. What do you think?',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 21, 0)),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'How about 8pm at Starbucks?',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
];
