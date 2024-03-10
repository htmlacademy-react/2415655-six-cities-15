import { Helmet } from 'react-helmet-async';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { TCard } from '../../mocks/types';

type FavoritesScreenProps = {
  cards: TCard[];
}

function FavoritesScreen({cards}: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <Helmet>
              <title>Saved listing</title>
            </Helmet>
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList cards={cards}/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesScreen;