import { api } from '@/lib/api'
import { NextApiHandler } from 'next'
import { NextResponse } from 'next/server'

export const GET: NextApiHandler = async (req, res) => {
  const { searchParams } = new URL(req.url!)
  const code = searchParams.get('code')

  try {
    const registerResponse = await api.post('/register', {
      code,
    })

    const { token } = registerResponse.data

    const redirectURL = new URL('/', req.url)

    const cookieExpiresInSeconds = 60 * 60 * 24 * 30

    return NextResponse.redirect(redirectURL, {
      headers: {
        'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
      },
    })
  } catch (error) {
    return res.status(404).json({
      message: 'Erro ao processar informações do usuário.',
    })
  }
}
