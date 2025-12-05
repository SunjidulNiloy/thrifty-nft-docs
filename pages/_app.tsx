import { Space_Grotesk } from 'next/font/google'
import type { AppProps } from 'next/app'
import 'nextra-theme-docs/style.css'
import '../styles/global.css'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={spaceGrotesk.className}>
            <Component {...pageProps} />
        </main>
    )
}
