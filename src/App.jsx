import { Fragment } from 'react'
import Card from './components/Card'
import image from './assets/img.jpg'
import image01 from './assets/img01.jpg'
import image02 from './assets/img02.jpg'


function App() {
   return(
      <Fragment>
         <Card title="Poster: Star Wars (1977)" 
               posterImage={image}
               content="Star Wars (Brasil: Guerra nas Estrelas / Portugal: 
                        Guerra das Estrelas) é uma franquia do tipo space opera 
                        estadunidense criada pelo cineasta George Lucas, que conta 
                        com uma série de nove filmes de fantasia científica e 
                        dois spin-offs.[1] O primeiro filme foi lançado apenas com o 
                        título Star Wars,[2] em 25 de maio de 1977, e tornou-se um fenômeno mundial 
                        inesperado de cultura popular,[3] sendo responsável pelo início da era dos 
                        blockbusters, que são superproduções cinematográficas que fazem sucesso nas 
                        bilheterias e viram franquias com brinquedos, jogos, livros, etc."
         />
            <Card       title="Poster: Empire Stikes (1980)" 
                        posterImage={image01}
                        content="The Empire Strikes Back (also known as Star Wars: Episode V 
                        The Empire Strikes Back) is a 1980 American epic space opera film 
                        directed by Irvin Kershner from a screenplay by Leigh Brackett and 
                        Lawrence Kasdan, based on a story by George Lucas. The sequel to Star Wars (1977),
                        it is the second film in the Star Wars film series and the fifth chronological 
                        chapter of the Skywalker Saga."

         
         />
         <Card 
                  title="Poster: Return of the Jedi (1980)" 
                  posterImage={image02}
                  content="Return of the Jedi (also known as Star Wars: Episode VI
                  Return of the Jedi) is a 1983 American epic space opera film that is a 
                  sequel to Star Wars (1977)[a] and The Empire Strikes Back (1980). It is 
                  the third installment in the original Star Wars trilogy and the sixth 
                  chronological film in the Skywalker Saga. It is directed by Richard
                  Marquand based on a screenplay by Lawrence Kasdan and George Lucas 
                  from a story by Lucas, 
                  who was also the executive producer. The film follows the ongoing 
                  struggle between the malevolent Galactic Empire and the freedom 
                  fighters of the Rebel Alliance."
      
            />
      </Fragment>
   )
}

export default App
