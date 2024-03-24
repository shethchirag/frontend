export const sampleChats = [
  {
    avatar: [
      "https://cdn5.vectorstock.com/i/1000x1000/92/89/hipster-avatar-image-vector-19639289.jpg",
    ],
    name: "Mohammad",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://randomuser.me/api/portraits/women/2.jpg"],
    name: "Sarah",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://randomuser.me/api/portraits/men/3.jpg",
      "https://randomuser.me/api/portraits/women/4.jpg",
    ],
    name: "Group Chat",
    _id: "3",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "john deo",
    _id: "1",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "john deo",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "john deo",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "john deo",
    },
    _id: "2",
  },
];

export const sampleMessages = [
  {
    attachments: [
      {
        public_id: "1",
        url: "https://www.w3schools.com/w3images/avatar2.png",
      },
    ],
    content: "Hello",
    _id: "snsnsnshcbkdsv",
    sender: {
      _id: "user._id",
      name: "john deo",
    },
    chat: "chatID",
    createdAt: "2022-03-15T14:44:00.000Z",
  },
  {
    attachments: [
      {
        public_id: "1",
        url: "https://www.w3schools.com/w3images/avatar2.png",
      },
    ],
    content: "Hello",
    _id: "snsnsnshcbk",
    sender: {
      _id: "xshgchsvcjhcbskc",
      name: "john deo",
    },
    chat: "chatID",
    createdAt: "2022-03-15T14:44:00.000Z",
  },
];
