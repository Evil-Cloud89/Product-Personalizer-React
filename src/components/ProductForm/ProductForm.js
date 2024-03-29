import styles from './ProductForm.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';

const ProductForm = props => {

  const summary = e => {
    e.preventDefault();
    props.addToCart()
  }

  return (
    <form>
      <OptionSize
      setCurrentSize={props.setCurrentSize}
      setCurrentPrice={props.setCurrentPrice}
      currentSize={props.currentSize}
      currentPrice={props.currentPrice}
      sizes={props.sizes}
      />
      <OptionColor
      setCurrentColor={props.setCurrentColor}
      colors={props.colors}
      currentColor={props.currentColor}
      />
      <Button onClick={summary} className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

export default ProductForm;