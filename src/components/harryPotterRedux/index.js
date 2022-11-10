import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {getHarryPotter} from '../../actions/harryPotter';

const HarryPotterRedux = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.harryPotter.value);

  useEffect(() => {
    console.log('HarryPotterRedux');
    // on recupere l'api via la fonction getHarryPotter()
    // on ne peut pas utilisé de call asynchrone en redux, il faut alors
    // utiliser redux-thunk
    dispatch(getHarryPotter());
  }, [dispatch]);

  return (
    <ScrollViewHarry>
      <Text>Harry Potter Redux</Text>
      {/* on recupere les donnee sotcké dans character ( qui sont enfaite les
        données api) pour les afficher */}
      {characters.map((character, index) => (
        <Text key={index}>{character.name}</Text>
      ))}
    </ScrollViewHarry>
  );
};

// on cree le style de notre future scrollView harry Poter
const ScrollViewHarry = styled.ScrollView``;

export default HarryPotterRedux;
