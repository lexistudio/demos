// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      { name: 'home', href: '/' },
      { name: 'about us', href: '/about' },
      { name: 'video', href: '/video' }
    ]
  )
}
