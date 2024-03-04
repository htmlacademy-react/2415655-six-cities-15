import OfferForm from '../offer-form/offer-form';
import ReviewsList from '../reviews-list/reviews-list';

type OfferReviewProps = {
  isAuth: boolean;
}

function OfferReview({isAuth}: OfferReviewProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ReviewsList/>
      {isAuth && <OfferForm/>}
      {!isAuth && <p>Нужна авторизация</p>}
    </section>
  );
}

export default OfferReview;
