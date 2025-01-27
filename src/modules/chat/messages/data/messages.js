module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Do you want to build a cool app?',
    createdAt: new Date(Date.UTC(2016, 10, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'User',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Me too. I'm here now",
    createdAt: new Date(Date.UTC(2016, 9, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Developer',
    },
    sent: true,
    received: true,
    location: {
      latitude: 48.864601,
      longitude: 2.398704,
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Doing great!',
    createdAt: new Date(Date.UTC(2016, 8, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'User',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Sup man, how're you doing?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Developer',
    },
    sent: true,
    received: true,
    // location: {
    //   latitude: 48.864601,
    //   longitude: 2.398704
    // },
  },
];
