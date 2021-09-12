import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useState } from 'react';

export default function movieRow({title, item}) {
    const [scrollX, setScrollX] = useState(0);

    const handleLeft = () =>  {
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x)
    }

    const handleRight = () =>  {
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = 20 * 150;
        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x)
    }

    return (
        <div>
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeft}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--right" onClick={handleRight}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{marginLeft: scrollX, width: 20 * 150}}>
                        {item.results.map((itemSelected, key)=>(
                            <div className="movieRow--item">
                                <img src={'https://image.tmdb.org/t/p/w300'+itemSelected.poster_path} alt={item.title} key={key}></img>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}