import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Rahul Choudhary',
    email: 'rahuladmin@email.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'Mitush',
    email: 'mitushadmin@email.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: "Test User Rahul",
    email: 'testuser@email.com',
    password: bcrypt.hashSync('test', 10),
  },
  {
    name: "Test User Muskan",
    email: 'testusermuskan@email.com',
    password: bcrypt.hashSync('test', 10),
  },
  {
    name: "Test User Mitush",
    email: 'testusermitush@email.com',
    password: bcrypt.hashSync('test', 10),
  },
];

export default users;
