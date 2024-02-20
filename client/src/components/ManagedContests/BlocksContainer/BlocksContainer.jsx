import { FaUserShield, FaChartPie } from 'react-icons/fa';
import { MdGroups, MdOutlineSocialDistance } from 'react-icons/md';
import styles from './BlockContainer.module.sass';
import Block from './Block/Block';

function BlocksContainer () {
  return (
    <div className={styles.marketResearAndCompeti}>
      <Block
        icon={<FaUserShield />}
        text={
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, impedit?'
        }
        header={'Consultant Led'}
        iconStyles={{ color: 'orange' }}
        className={styles.marketResearAndCompetiBlock}
      />

      <Block
        icon={<MdGroups />}
        text={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cum aut modi maxime sed dignissimos.'
        }
        header={'ipsum dolor sit amet.'}
        iconStyles={{ color: 'blue' }}
        className={styles.marketResearAndCompetiBlock}
      />
      <Block
        icon={<FaChartPie />}
        text={'consectetur adipisicing elit. Maiores cum aut modi maxime'}
        header={'ipsum dolor sit amet.amet'}
        iconStyles={{ color: 'purple' }}
        className={styles.marketResearAndCompetiBlock}
      />
      <Block
        icon={<MdOutlineSocialDistance />}
        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nihil?'}
        header={'audience testing'}
        iconStyles={{ color: 'green' }}
        className={styles.marketResearAndCompetiBlock}
      />
    </div>
  );
}

export default BlocksContainer;
