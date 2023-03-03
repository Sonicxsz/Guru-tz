import { useEffect, useState } from 'react';
import Card from './components/card';
import { CenterWrapper, Container, Flex, MainTitle, MoreButton, Wrapper } from './components/common';
import ArrowIcon from './components/icons/ArrowIcon';
import dataService from './service/dataService';
import Spinner from './components/icons/Spinner';

export interface RootObject {
  id: string;
  oldPrice: string;
  price: string;
  title: string;
  seen: boolean;
  locality: string;
  date: number;
  img?: []
}

function App() {
    const [items, setItems] = useState<RootObject[]>([])
    const [offset, setOffset] = useState(1);
    
    const {getData, loading, isEnd} = dataService();
   
    const handleIncOffset = () => {
        setOffset(offset => ++offset)
    }

    useEffect(() => {
        getData(offset).then(data => setItems([...items, ...data]))
    }, [offset])

    const showBtnOrMess = !isEnd  
        ? <MoreButton disabled={loading} dis={loading}  onClick={handleIncOffset}>Показать еще <ArrowIcon/></MoreButton>
        :  <CenterWrapper>Вы просмотрели все товары</CenterWrapper>
    
    return (
        <Container>
            <MainTitle>Похожие объявления</MainTitle>
            <Wrapper>
                {items.map((i) => {
                    return  <Card id={i.id}
                        key={i.id}
                        seen={i.seen} 
                        locality={i.locality} 
                        date={i.date} 
                        title={i.title} 
                        price={i.price} 
                        oldPrice={i.oldPrice} /> 
                  
                })}
            </Wrapper>
            <Flex justify='flex-end' margin='16px'>
                {loading && <Spinner/>}
                {showBtnOrMess}
            </Flex>
            
            
        </Container>
    );
}



export default App;
