import { GetStaticProps } from "next";
import Tmdb from '../service/Tmdb';
import MovieRows from '../components/Row/MovieRows';
import TopMovie from '../components/TopMovie/topMovie';
import Header from '../components/Header/header';
import { useEffect, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Home({ allMovies, topMovie }) {
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
   async function scrollListener() {
     if(window.scrollY > 10) {
       setBlackHeader(true);
     } else {
       setBlackHeader(false);
     }
   }
 
   window.addEventListener("scroll", function () {
     scrollListener();
 }, false);
 
   return () => {
     window.removeEventListener('scroll', scrollListener);
   }
  })

  return (
    <div className="page">
        <Header black={blackHeader}/>
        <TopMovie item={topMovie}/>
        <section className="lists">
          {allMovies.map((item, key) => (
            <MovieRows key={key} title={item.title} item={item.items}></MovieRows>
          ))}
        </section>
        <footer>
          Feito com <FavoriteIcon/> por Leo
        </footer>

        {!allMovies &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"></img>
        </div>
        }
        
      </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await Tmdb.getApi();
    let top = result.filter(i=>i.slug === 'originals');
    let valor = 0;
    let counter = top[0].items.results.forEach(element => {
      valor++;
    });
    let random = Math.floor(Math.random()*(valor))
    const chosen = top[0].items.results[random];
    let info = await Tmdb.getMovieInfo(chosen.id, 'tv');

  return {
    props: {
      allMovies: await result,
      topMovie: await info
    },
    revalidate: 10
  }
};