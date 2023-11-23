import './style.css';
import ghibli from '../../img/ghibli.png'


function Home() {
    return <>
    <div className='home'>

        <div className='homeElement'>
            <p className='homePara'>
            Studio Ghibli, fondé en 1985 par Hayao Miyazaki et Isao Takahata, est un trésor de l'animation japonaise. <br />
            Célèbre pour ses films magiques, le studio crée des mondes captivants, mêlant nature et mystère. <br />
            De "Mon Voisin Totoro" à "Le Voyage de Chihiro", chaque film est une expérience inoubliable. <br />
            Explorez notre site pour découvrir ces joyaux de l'animation et en apprendre davantage sur les créateurs de ces chefs-d'œuvre. <br />
            Plongez dans l'univers féerique de Studio Ghibli dès aujourd'hui !
            </p>

            <img src={ghibli} className='homeImg'/>
        </div>

    </div>
    </>
};

export default Home;

 