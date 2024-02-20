import styles from './ManagedContests.module.sass';
import BlocksContainer from './BlocksContainer/BlocksContainer';
function ManagedContests () {
  return (
    <div className={styles.managedContests}>
      <h2 className={styles.mainHeader}>Managed Contests</h2>
      <p className={styles.mainText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        laboriosam nemo mollitia ratione tempora pariatur totam error omnis vel
        minus aperiam, eos exercitationem quisquam nobis, repudiandae minima
        amet ad temporibus.
      </p>

      <BlocksContainer />
      <a href='#' className={styles.button}>
        Learn More
      </a>
    </div>
  );
}

export default ManagedContests;
