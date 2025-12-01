import { getRandomInteger } from './util.js';
import * as consts from './consts.js';

const getMessage = function (count) {
  let message = '';
  for (let i = 0; i < count; i++) {
    message += `${consts.MESSAGES[getRandomInteger(1, consts.MESSAGES.length)]} `;
  }

  return message.trim();
};


const getComment = function (id) {
  return {
    id: id,
    avatar: `img/avatar-${getRandomInteger(1, 7)}.svg`,
    message: getMessage(getRandomInteger(1, 3)),
    name: consts.NAMES[getRandomInteger(1, consts.NAMES.length)],
  };
};

const getComments = function (itemId, count) {
  const comments = [];
  for (let i = 1; i <= count; i++) {
    const id = (itemId - 1) * consts.MAX_COMMENTS_COUNT + i;
    comments.push(getComment(id));
  }
  return comments;
};

const getItem = function (id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: consts.DESCRIPTIONS[getRandomInteger(0, consts.DESCRIPTIONS.length)],
    likes: getRandomInteger(15, 201),
    comments: getComments(id, getRandomInteger(0, consts.MAX_COMMENTS_COUNT + 1)),
  };
};

const getItemsPhotos = function () {
  return Array.from({ length: consts.PHOTOS_COUNT }, (_, k) => getItem(k + 1));
};

export { getItemsPhotos };
