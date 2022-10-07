import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Header } from '../Components';
import { fetchItems } from '../redux/Items/fetch';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state: any) => state.ItemReducer);

  const getItems = () => {
    // @ts-ignore
    dispatch(fetchItems());
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getItems();
  }, [dispatch]);

  const card = [items].map((obj: any, i) => <Card key={i} {...obj} />);
  console.log(items);

  return (
    <>
      <Header />

      {status === 'error' ? (
        <div>Ошибка</div>
      ) : (
        <div className="wrapper">{status === 'loading' ? card : card}</div>
      )}

      {/* <Category ChangeCategory={ChangeCategory} category={category} /> */}
      {/* <div className="wrapper">
        {status === 'loading' ? (
          <div>Loading</div>
        ) : (
          <div>
            <Card items={items} />
          </div>
          // items && items.map((obj: any) => <Card key={obj.hash} {...obj} />)
        )}
      </div> */}
    </>
  );
};

export default Home;
