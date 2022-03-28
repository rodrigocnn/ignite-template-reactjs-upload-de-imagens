import { Button, Box } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import axios from 'axios';

export default function Home(): JSX.Element {
  
  const [data, setData] = useState([])

  useEffect(()=>{

    getUsers()
    
  },[])

  const getUsers = async () => {
  
    let res = await api.get("/images");
    let { data } = res.data;
    console.log('data', data)
    return data
};
  
  /*const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery( 'images', 
    // TODO AXIOS REQUEST WITH PARAM
    ,
    // TODO GET AND RETURN NEXT PAGE PARAM
  ); */

  const formattedData = useMemo(() => {
    // TODO FORMAT AND FLAT DATA ARRAY
    
    return 
  }, [data]);

  // TODO RENDER LOADING SCREEN

  // TODO RENDER ERROR SCREEN

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={data} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
      </Box>
    </>
  );
}
