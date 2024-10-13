import styles from './CamperGallery.module.css';

const CamperGallery = ({ gallery, description}) => {
  return (
    <ul className={styles.camperGalleryList}>
      {gallery.map((item, index) => (
        <li className={styles.camperGalleryItem} key={index + item.thumb}>
          <img className={styles.camperGalleryImg} src={item.thumb} width={292} height={312} alt={description}/>
        </li>
      ))}
    </ul>
  );
};

export default CamperGallery;
