import { useEffect, useState } from 'react';
import Card from './components/card';
export interface RootObject {
  id: string;
  oldPrice: string;
  price: string;
  title: string;
  seen: boolean;
  locality: string;
  date: number;
}

import { Container, MainTitle, Wrapper } from './components/container';
function App() {
    const [data, setData] = useState<RootObject[]>([])

    useEffect(() => {
        fetch('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
            .then(data => data.json())
            .then(data => setData(data))
    }, [])

    return (
        <Container>
            <MainTitle>Похожие объявления</MainTitle>
            <Wrapper>
                {data.map(i => {
                    return <Card id={i.id}
                        key={i.id}
                        seen={i.seen} 
                        locality={i.locality} 
                        date={i.date} 
                        title={i.title} 
                        price={i.price} 
                        oldPrice={i.oldPrice} />
                })}
            </Wrapper>
        </Container>
    );
}



export default App;
