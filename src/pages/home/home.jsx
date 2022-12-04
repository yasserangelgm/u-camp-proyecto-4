import Hero from '../../components/hero/hero.component';
import Slide from '../../components/slide/slide.component';

import { db } from '../../config/firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const Home = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'promos'));
    onSnapshot(q, (querySnapshot) => {
      setPromos(
        querySnapshot.docs.map((promo) => {
          return { id: promo.id, data: promo.data() };
        })
      );
    });
  }, []);

  return (
    <>
      <Hero />

      <Slide promos={promos} />
    </>
  );
};

export default Home;
