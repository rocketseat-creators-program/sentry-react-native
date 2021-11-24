import produce from 'immer';
import types from './types';

const INITIAL_STATE = {
  events: [
    {
      cover: 'https://i.imgur.com/PWH7rXX.png',
      headline: '21 Mar - 21:00 PM',
      title: 'Disco 90’s  - Inauguração do bar.',
      about:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
      photos: [
        'https://rockitboy.com/framework/uploads/2017/01/Screen-Shot-2013-04-30-at-5.33.56-PM.png',
        'https://rockitboy.com/framework/uploads/2017/01/maxresdefault-1024x576.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJWhVGACjvUoQgpM2DOcvXrRnFxGqrR_Gv6h2lXQQrri-DvlllgA6Ohepxc9TqwBT09I&usqp=CAU',
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/08/05/12/fit.jpg?width=982&height=726&auto=webp&quality=75',
      ],
    },
    {
      cover:
        'https://rockitboy.com/framework/uploads/2017/01/maxresdefault-1024x576.jpg',
      headline: '22 Mar - 22:00 PM',
      title: 'Old School Mega Party 2022',
      about:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
      photos: [
        'https://rockitboy.com/framework/uploads/2017/01/Screen-Shot-2013-04-30-at-5.33.56-PM.png',
        'https://rockitboy.com/framework/uploads/2017/01/maxresdefault-1024x576.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJWhVGACjvUoQgpM2DOcvXrRnFxGqrR_Gv6h2lXQQrri-DvlllgA6Ohepxc9TqwBT09I&usqp=CAU',
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/08/05/12/fit.jpg?width=982&height=726&auto=webp&quality=75',
      ],
    },
    {
      cover:
        'https://rockitboy.com/framework/uploads/2017/01/Screen-Shot-2013-04-30-at-5.33.56-PM.png',
      headline: '02 Jan - 21:00 PM',
      title: 'Open Bar Temático - Good Vibes',
      about:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
      photos: [
        'https://rockitboy.com/framework/uploads/2017/01/Screen-Shot-2013-04-30-at-5.33.56-PM.png',
        'https://rockitboy.com/framework/uploads/2017/01/maxresdefault-1024x576.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJWhVGACjvUoQgpM2DOcvXrRnFxGqrR_Gv6h2lXQQrri-DvlllgA6Ohepxc9TqwBT09I&usqp=CAU',
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/08/05/12/fit.jpg?width=982&height=726&auto=webp&quality=75',
      ],
    },
    {
      cover:
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/08/05/12/fit.jpg?width=982&height=726&auto=webp&quality=75',
      headline: '21 Mar - 21:00 PM',
      title: 'Disco 2000’s  - Inauguração do bar.',
      about:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
      photos: [
        'https://rockitboy.com/framework/uploads/2017/01/Screen-Shot-2013-04-30-at-5.33.56-PM.png',
        'https://rockitboy.com/framework/uploads/2017/01/maxresdefault-1024x576.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJWhVGACjvUoQgpM2DOcvXrRnFxGqrR_Gv6h2lXQQrri-DvlllgA6Ohepxc9TqwBT09I&usqp=CAU',
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/08/05/12/fit.jpg?width=982&height=726&auto=webp&quality=75',
      ],
    },
    {
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJWhVGACjvUoQgpM2DOcvXrRnFxGqrR_Gv6h2lXQQrri-DvlllgA6Ohepxc9TqwBT09I&usqp=CAU',
      headline: '21 Mar - 21:00 PM',
      title: 'Discoteca + Boliche - Festa temática.',
      about:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
      photos: [
        'https://rockitboy.com/framework/uploads/2017/01/Screen-Shot-2013-04-30-at-5.33.56-PM.png',
        'https://rockitboy.com/framework/uploads/2017/01/maxresdefault-1024x576.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJWhVGACjvUoQgpM2DOcvXrRnFxGqrR_Gv6h2lXQQrri-DvlllgA6Ohepxc9TqwBT09I&usqp=CAU',
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/08/05/12/fit.jpg?width=982&height=726&auto=webp&quality=75',
      ],
    },
    {
      cover:
        'https://i.pinimg.com/originals/4f/17/f9/4f17f912a79d5f1aced43d77ec8cdea1.jpg',
      headline: '21 Mar - 21:00 PM',
      title: 'Disco 90’s  - Inauguração do bar.',
      about:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
      photos: [
        'https://rockitboy.com/framework/uploads/2017/01/Screen-Shot-2013-04-30-at-5.33.56-PM.png',
        'https://rockitboy.com/framework/uploads/2017/01/maxresdefault-1024x576.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJWhVGACjvUoQgpM2DOcvXrRnFxGqrR_Gv6h2lXQQrri-DvlllgA6Ohepxc9TqwBT09I&usqp=CAU',
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/08/05/12/fit.jpg?width=982&height=726&auto=webp&quality=75',
      ],
    },
    {
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEToIWtg68pX8de-C2ExUb_YD1-t1dmus-29jUHrabpP-JMlNa3PiYOx_branViXi7Gk&usqp=CAU',
      headline: '21 Mar - 21:00 PM',
      title: 'Disco 90’s  - Inauguração do bar.',
      about:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
      photos: [
        'https://rockitboy.com/framework/uploads/2017/01/Screen-Shot-2013-04-30-at-5.33.56-PM.png',
        'https://rockitboy.com/framework/uploads/2017/01/maxresdefault-1024x576.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJWhVGACjvUoQgpM2DOcvXrRnFxGqrR_Gv6h2lXQQrri-DvlllgA6Ohepxc9TqwBT09I&usqp=CAU',
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/08/05/12/fit.jpg?width=982&height=726&auto=webp&quality=75',
      ],
    },
  ],
  event: {},
};

export default function event(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_EVENT: {
      return produce(state, draft => {
        draft.event = action.event;
      });
    }
    default:
      return state;
  }
}
