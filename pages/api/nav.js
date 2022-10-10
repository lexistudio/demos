// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      { name: 'Главная', href: '/' },
      { name: 'Блоги', href: '/blog' },
      { name: 'Видео', href: '/video' },
      { name: 'Резюме', href: '/resume' }
    ]
  )
}
