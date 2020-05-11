export const WidgetReq = [
  {
    name: '',
    code: '',
    type: 'product' || 'category' || 'image',
    image_type: 'card_fixed' || 'card_slider',
    web: {
      autoplay: false,
      images_per_row: 0,
      images: [
        {
          id: '',
          alt: '',
          title: '',
          link: '',
        },
      ],
    },
    mobile: {
      autoplay: false,
      images_per_row: 0,
      images: [
        {
          id: '',
          alt: '',
          title: '',
          link: '',
        },
      ],
    },
    product_ids: [],
    category_ids: [],
  },
]

export const WidgetRes = [
  {
    name: '',
    code: '',
    type: 'product' || 'category' || 'image',
    image_type: 'card_fixed' || 'card_slider',
    web: {
      autoplay: false,
      images_per_row: 0,
      images: [
        {
          id: '',
          alt: '',
          title: '',
          link: '',
        },
      ],
    },
    mobile: {
      autoplay: false,
      images_per_row: 0,
      images: [
        {
          id: '',
          alt: '',
          title: '',
          link: '',
        },
      ],
    },
    product: [
      {
        slug: '',
        name: 'Honor 7A Mobile Phone Cover',
        attachment: 'https://via.placeholder.com/245x272.png',
        discount: '25%',
        discounted_price: '150',
        actual_price: '200',
        rating: {
          average: '4.2',
          total: '3200',
        },
      },
    ],
    category: [
      {
        name: '',
        slug: '',
        attachment: '',
      },
    ],
  },
]

// admin panel

export const types = [
  {
    name: 'Image',
    type: 'image',
    thumbnail: 'https://via.placeholder.com/50x50.png',
    description: 'no description available',
    help: '',
  },
]

export const layoutData = [
  {
    level: 1,
    details: {
      type: 'image',
      image_type: 'card-slider',
      name: 'Banner Image',
      code: 'BANNER',
      web: {
        autoplay: true,
        images_per_row: 1,
        images: [
          {
            url: 'https://via.placeholder.com/1378x768.png',
            alt: 'placeholder',
            title: 'This is placeholder',
            link: 'https://via.placeholder.com/1378x768.png',
          },
          {
            url: 'https://via.placeholder.com/1378x768.png',
            alt: 'placeholder',
            title: 'This is placeholder',
            link: 'https://via.placeholder.com/1378x768.png',
          },
        ],
      },
      mob: {
        autoplay: true,
        images_per_row: 1,
        images: [
          {
            url: 'https://via.placeholder.com/689x366.png',
            alt: 'placeholder',
            title: 'This is placeholder',
            link: 'https://via.placeholder.com/689x366.png',
          },
        ],
      },
    },
  },
  {
    level: 1,
    details: {
      type: 'image',
      image_type: 'card-fixed',
      name: 'Banner Image',
      code: 'BANNER',
      web: {
        autoplay: false,
        images_per_row: 4,
        images: [
          {
            url: 'https://via.placeholder.com/345x365.png',
            alt: 'placeholder',
            title: 'This is placeholder',
            link: 'https://via.placeholder.com/345x365.png',
          },
          {
            url: 'https://via.placeholder.com/345x365.png',
            alt: 'placeholder',
            title: 'This is placeholder',
            link: 'https://via.placeholder.com/345x365.png',
          },
          {
            url: 'https://via.placeholder.com/345x365.png',
            alt: 'placeholder',
            title: 'This is placeholder',
            link: 'https://via.placeholder.com/345x365.png',
          },
          {
            url: 'https://via.placeholder.com/345x365.png',
            alt: 'placeholder',
            title: 'This is placeholder',
            link: 'https://via.placeholder.com/345x365.png',
          },
        ],
      },
      mob: {
        autoplay: true,
        images_per_row: 1,
        images: [
          {
            url: 'https://via.placeholder.com/689x366.png',
            alt: 'placeholder',
            title: 'This is placeholder',
            link: 'https://via.placeholder.com/689x366.png',
          },
        ],
      },
    },
  },
  {
    level: 1,
    child: [
      {
        level: 2,
        details: {
          name: 'New Arrivals',
          code: 'NEW_ARRIVALS',
          type: 'image',
          image_type: 'card-fixed',
          web: {
            autoplay: false,
            images_per_row: 1,
            images: [
              {
                url: 'https://via.placeholder.com/689x366.png',
                alt: 'placeholder',
                title: 'This is placeholder',
                link: 'https://via.placeholder.com/689x366.png',
              },
            ],
          },
          mobile: {
            autoplay: true,
            images_per_row: 1,
            images: [
              {
                url: 'https://via.placeholder.com/525x366.png',
                alt: 'placeholder',
                title: 'This is placeholder',
                link: 'https://via.placeholder.com/525x366.png',
              },
            ],
          },
        },
      },
      {
        level: 2,
        details: {
          name: 'Old Products',
          code: 'OLD_PRODUCTS',
          type: 'image',
          image_type: 'card-slider',
          web: {
            autoplay: false,
            images_per_row: 1,
            images: [
              {
                url: 'https://via.placeholder.com/689x366.png',
                alt: 'placeholder',
                title: 'This is placeholder',
                link: 'https://via.placeholder.com/689x366.png',
              },
            ],
          },
          mobile: {
            autoplay: true,
            images_per_row: 1,
            images: [
              {
                url: 'https://via.placeholder.com/525x366.png',
                alt: 'placeholder',
                title: 'This is placeholder',
                link: 'https://via.placeholder.com/525x366.png',
              },
            ],
          },
        },
      },
    ],
  },
]
