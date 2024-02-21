import { FaUserShield, FaChartPie } from 'react-icons/fa';
import { MdGroups, MdOutlineSocialDistance } from 'react-icons/md';
import styles from './BlockContainer.module.sass';
import Block from './Block/Block';
import data from './data.json';
function BlocksContainer () {
  function mapDataToComponent ({ icon, text, header, iconStyles }) {
    const Icon = {
      FaUserShield: <FaUserShield />,
      FaChartPie: <FaChartPie />,
      MdGroups: <MdGroups />,
      MdOutlineSocialDistance: <MdOutlineSocialDistance />,
    };
    return (
      <Block
        icon={Icon[icon]}
        text={text}
        header={header}
        iconStyles={iconStyles}
        className={styles.marketResearAndCompetiBlock}
      />
    );
  }

  return (
    <div className={styles.marketResearAndCompeti}>
      {data.map(element => mapDataToComponent(element))}
    </div>
  );
}

export default BlocksContainer;
