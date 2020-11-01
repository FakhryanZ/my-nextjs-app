import styles from "../styles/Home.module.css";

const Item = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.poster} alt={props.title} />
      <h4> {props.Title} </h4>
      <p>Year : {props.year} </p>
    </div>
  );
};

export default Item;
