// Content for protocol component in home page
export const protocolList = [
  {
    'logo': 'fas fa-spray-can fa-2x md:fa-3x',
    'title': '定期清潔消毒',
    'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    'logo': 'fas fa-thermometer fa-2x md:fa-3x',
    'title': '固定量測溫度',
    'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    'logo': 'fas fa-broom fa-2x md:fa-3x',
    'title': '乾淨舒適的空間',
    'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    'logo': 'fas fa-users fa-2x md:fa-3x',
    'title': '最專業的團隊',
    'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    'logo': 'fas fa-toolbox fa-2x md:fa-3x',
    'title': '最棒的設備',
    'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    'logo': 'far fa-comment fa-2x md:fa-3x',
    'title': '優良的回饋',
    'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
]

// Content for Team page
export const teamMembers = [
  {name: 'Ryan Chen', image: 'bg-barber-img-1', memberId: 'r034217'},
  {name: 'Steve Hsu', image: 'bg-barber-img-2', memberId: 's126183'},
  {name: 'Kelly Wu', image: 'bg-barber-img-3', memberId: 'k484192'},
  {name: 'Mark Lin', image: 'bg-barber-img-4', memberId: 'm334217'},
  {name: 'Tiffany Chiu', image: 'bg-barber-img-5', memberId: 't834752'},
  {name: 'Cindy Wang', image: 'bg-barber-img-6', memberId: 'c634713'},
]

export const progressBarValue = [
  {name: '髮型設計', value: '95', width: 'w-[95%]'},
  {name: '修剪技術', value: '90', width: 'w-[90%]'},
  {name: '修鬍造型設計', value: '85', width: 'w-[85%]'},
  {name: '頭皮按摩/養護', value: '88', width: 'w-[88%]'},
]

// Content for service price component in home page
export const servicePrice = [
  {
    category: '剪髮',
    translation: 'TRIM OFF',
    detail: [
      {name: '造型剪髮', translation: 'Classic Haircut', price: 700},
      {name: '學生剪髮（憑學生證）', translation: 'Student Haircut', price: 550},
      {name: '經典寸頭', translation: 'Classic Buzzcut', price: 400},
      {name: '髮型雕刻', translation: 'Carving', price: 500},
    ]
  },
  {
    category: '染髮',
    translation: 'COLOURING',
    detail: [
      {name: '全染', translation: 'Hair Coloring', price: 1600},
      {name: '洗色', translation: 'Bleach', price: 1800},
      {name: '設計染', translation: 'Design Coloring', price: 1750}
    ]
  },
  {
    category: '護髮',
    translation: 'TREATMENT',
    detail: [
      {name: '頭皮護理', translation: 'Scalp Treatment', price: 1000},
      {name: '受損髮修補', translation: 'Hair Treatment', price: 1000},
    ]
  },
  {
    category: '修容',
    translation: 'TRIMMING',
    detail: [
      {name: '雕塑修容', translation: 'Face Trim', price: 1000},
      {name: '專業修鬍', translation: 'Beard Trim', price: 300}
    ]
  },
  {
    category: '燙髮',
    translation: 'PERMANENT',
    detail: [
      {name: '燙髮', translation: 'Hair Perming', price: 1600},
      {name: '黑人頭造型燙', translation: 'Dreadlocks', price: 3200}
    ]
  }
]

// Content for service component in home page
export const serviceList = [
  {
    'logo': 'fas fa-cut fa-lg',
    'class': 'row-start-1 row-span-2 mr-2',
    'title': '經典剪髮',
    'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, provident!'
  },
  {
    'logo': 'fas fa-spa fa-lg',
    'class': 'row-start-3 row-span-2 mr-2',
    'title': '頭皮按摩',
    'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, perferendis?'
  },
  {
    'logo': 'fas fa-tint fa-lg',
    'class': 'row-start-2 row-span-2 mr-2',
    'title': '染髮',
    'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, nobis.'
  },
  {
    'logo': 'fas fa-bacon fa-lg',
    'class': 'row-start-4 row-span-2 mr-2',
    'title': '修容',
    'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, excepturi.'
  }
]

// Content for blog post
export const blogPosts = [
  {title: '喜迎五倍券，十月優惠活動開跑', author: 'Ryan Chen', date: '10.12.2021', image: 'bg-news-img-1', postId: '20211012'},
  {
    title: '蒐羅經典，就在此時，優惠燙染護髮用品現正熱賣中',
    author: 'Kelly Wu',
    date: '09.14.2021',
    image: 'bg-news-img-2',
    postId: '20210914'
  },
  {title: '防疫新生活，最新來店措施說明', author: 'Cindy Wang', date: '08.10.2021', image: 'bg-news-img-3', postId: '20210810'},
  {title: '疫起來剪，清爽的時尚守則', author: 'Cindy Wang', date: '07.03.2021', image: 'bg-news-img-4', postId: '20210703'},
  {title: '五月份優惠活動中獎名單', author: 'Tiffany Chiu', date: '05.22.2021', image: 'bg-news-img-5', postId: '20210522'},
  {title: '春季養護攻略，大師來解答', author: 'Ryan Chen', date: '04.08.2021', image: 'bg-news-img-6', postId: '20210408'},
]

// Get exact post data
export function getPost(number) {
  return blogPosts.find(
    post => parseInt(post.postId, 10) === number
  )
}

// Reservation data
// stylists: All stylists' name
// scheduleTime: Available schedule time
// scheduleService: Available services

export const stylists = ['Ryan', 'Kelly', 'Steve', 'Mark', 'Tiffany', 'Cindy']
export const scheduleTime = [
  {time: '12:00', value: '12'},
  {time: '13:00', value: '13'},
  {time: '14:00', value: '14'},
  {time: '15:00', value: '15'},
  {time: '16:00', value: '16'},
  {time: '17:00', value: '17'},
  {time: '18:00', value: '18'},
  {time: '19:00', value: '19'},
  {time: '20:00', value: '20'}
]
export const scheduleService = [
  {name: '造型剪髮', translation: 'Classic Haircut', price: 700},
  {name: '學生剪髮（憑學生證）', translation: 'Student Haircut', price: 550},
  {name: '經典寸頭', translation: 'Classic Buzzcut', price: 400},
  {name: '髮型雕刻', translation: 'Carving', price: 500},
  {name: '全染', translation: 'Hair Coloring', price: 1600},
  {name: '洗色', translation: 'Bleach', price: 1800},
  {name: '設計染', translation: 'Design Coloring', price: 1750},
  {name: '頭皮護理', translation: 'Scalp Treatment', price: 1000},
  {name: '受損髮修補', translation: 'Hair Treatment', price: 1000},
  {name: '雕塑修容', translation: 'Face Trim', price: 1000},
  {name: '專業修鬍', translation: 'Beard Trim', price: 300},
  {name: '燙髮', translation: 'Hair Perming', price: 1600},
  {name: '黑人頭造型燙', translation: 'Dreadlocks', price: 3200}
]
