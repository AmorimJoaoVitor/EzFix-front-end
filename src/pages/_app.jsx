import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { CarrinhoProvider } from '../contexts/Carrinho'
import { SessaoProvider } from '../contexts/Sessao'
library.add(fab, faCoffee)

function MyApp({ Component, pageProps }) {
  return (
    <SessaoProvider>
      <CarrinhoProvider>
        <Component {...pageProps} />
      </CarrinhoProvider>
    </SessaoProvider>
  )
}

export default MyApp
