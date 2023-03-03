import { useFetchData } from './hooks/useFetchData';
import Card from './components/card';
import { Container, Flex, MainTitle, MoreButton, PositonAbsWrapper, Wrapper } from './components/common';
import {ReactComponent as ArrowIcon} from './assets/svg/ArrowIcon.svg';
import {ReactComponent as Spinner} from './assets/svg/Spinner.svg';




function App() {
    const {items, images, handleIncOffset, isEnd, loading } = useFetchData()

    const showBtnOrMess = !isEnd  
        ? <MoreButton disabled={loading} dis={loading}  onClick={handleIncOffset}>Показать еще <ArrowIcon/></MoreButton>
        :  <PositonAbsWrapper center={true}>Вы просмотрели все товары</PositonAbsWrapper>
    
    return (
        <Container>
            <MainTitle>Похожие объявления</MainTitle>
            <Wrapper>
                {items.map((i) => {
                    return  <Card id={i.id}
                        images={images}
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
                {loading && <PositonAbsWrapper center={true}><Spinner/></PositonAbsWrapper>}
                {showBtnOrMess}
            </Flex>
            
            
        </Container>
    );
}



export default App;
