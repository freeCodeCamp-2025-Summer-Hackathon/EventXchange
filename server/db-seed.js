import {faker} from '@faker-js/faker';
import 'dotenv/config';
import {createEvent} from './src/controllers/event.controller.js';
import {createUser} from './src/controllers/user.controller.js';
import {dbConnect, dbDisconnect} from './src/models/db.js';

const numberOfUsers = 5;
const numberOfEvents = 5;
const maxNumberOfTags = 3;

seedDatabase();

async function seedDatabase() {
  await dbConnect();

  const userIds = [];
  for (let i = 0; i < numberOfUsers; i++) {
    const u = await createRandomUser();
    userIds.push(u.id);
  }

  for (let i = 0; i < numberOfEvents; i++) {
    await createRandomEvent(userIds);
  }

  await dbDisconnect();
}

async function createRandomUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const name = `${firstName} ${lastName}`;
  const username = faker.internet.username({firstName, lastName});
  const password = faker.internet.password();
  return await createUser(name, username, password);
}

async function createRandomEvent(userIds) {
  const title = faker.music.album();
  const description = faker.food.description();
  const createdAt = faker.date.past();
  const start = faker.date.future();
  const end = faker.date.future();
  const location = faker.location.streetAddress({useFullAddress: true});
  const organizer = faker.helpers.arrayElement(userIds);
  const attendees = faker.helpers.arrayElements(
    userIds.filter(id => id !== organizer),
    {min: 0, max: numberOfUsers - 2},
  );
  const tags = faker.helpers.multiple(faker.word.adjective, {
    min: 0,
    max: maxNumberOfTags,
  });
  const maxAttendees = faker.number.int({min: 1, max:100})

  await createEvent({
    title,
    description,
    createdAt,
    start,
    end,
    location,
    organizer,
    attendees,
    tags,
    maxAttendees,
  });
}
