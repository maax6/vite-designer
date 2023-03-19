import scarecrow from './Scarecrow.png'
import './_error.scss'
export function Error() {
  return (
    <div className="wrapper-404">
      <header className="notFound">
        <strong>ANOTHER DEVCHALLENGE.IO PROJECT</strong>
      </header>

      <div className="flexContainer">
        <div className="panoramic">
          <div className="scarecrow">
            <img className="scarecrow__img" src={scarecrow} alt="épouvantail" />
          </div>
          <section className="badNews">
            <div className="badNews__texts">
              <h1 className="badNews__texts__title">
                {' '}
                I have bad news for you
              </h1>
              <p className="badNews__texts__speech">
                The page you are looking for might be removed or is temporarily
                unavailable
              </p>
            </div>
            <a href="/" className="badNews__btn">
              <span className="badNews__btn__txt">BACK TO ALIZA HOME PAGE</span>
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}
