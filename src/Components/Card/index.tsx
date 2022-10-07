import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

const Card: React.FC<any> = ({ daily, vbuckIcon, featured, specialFeatured }) => {
  return (
    <div>
      {/* <h3 className={styles.title}>{daily?.entries?.section?.name}</h3> */}
      {daily?.entries.map((obj: any) => (
        <div>
          <ul className={styles.list} key={obj?.offerId}>
            <li className={styles.item}>
              <img
                src={obj?.newDisplayAsset?.materialInstances[0]?.images?.Background}
                alt={obj?.newDisplayAsset?.id}
              />
              <div>
                <h4>{obj?.items[0]?.name}</h4>
                <p>{obj?.regularPrice}</p>
                <img className={styles.icon} src={vbuckIcon} alt="V-Bucks" />
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Card;
