import React from 'react';
import styles from './Card.module.scss';
import { useSelector, useDispatch } from 'react-redux';
// import { setItems } from '../../redux/Items/slice';
import { AppDispatch } from '../../redux/store';
import { fetchItems } from '../../redux/Items/fetch';

// { itemId, images, cost, description }

const Card: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: any) => state.ItemSlice);

  React.useEffect(() => {
    dispatch(fetchItems({}));
  }, [dispatch]);

  return (
    <div>
      <div>
        <h2 className={styles.title}>
          current fortnite item shop
          <span> Data today</span>
        </h2>
        <div>New items in 13 hours</div>
        {/* <filter></filter> */}
        <div>
          {/* <h3>{item.section.name[0]}</h3> */}
          <div className={styles.list}>
            {items.map((user: any) => (
              <div key={user.mainId} className={styles.item}>
                <h3>{user.section.name}</h3>
                <img
                  className={styles.image}
                  src={
                    user?.displayAssets[1]
                      ? user?.displayAssets[1].background
                      : user.displayAssets[0].background
                  }
                  alt={user?.section?.id}
                />
                <p>{user?.displayName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
