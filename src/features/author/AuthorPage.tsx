import { Header } from '../../common/Header';
import { Main } from '../../common/Main';
import { Section } from '../../common/Section';
import reactImage from './reactImage.jpg';
import { Image } from './styled';

export const AuthorPage = () => (
    <>
        <Header title='O autorze' />
        <Main>
            <Section
                title='Krzysiek Jaczewski'
                body={
                    <>
                        <p>
                            Filmy i seriale Sci-Fi to moje ulubione zabijacze
                            czasu🛸, teraz staram się uczyć Frontendy, gdyż to
                            dla mnie takie trochę podróż w świat Sci-fi, w
                            kosmos możliwości i nieznanego potenjału🚀, w
                            nieznane którego odkrywanie sprawia trud, ale i
                            niebywałą satysfakcję gdy uda się dokończyć
                            projekt😎.
                        </p>
                        <br />
                        <p>
                            Uwielbiam też się śmiać, kabarety i stand-upy zawsze
                            potrafią mnie rozbawić😉.Uważam że życie jest za
                            krótkie, żeby się smucić😋, dlatego tworząć swoje
                            aplikacje zawsze staram się włączyć jakiś zabawny
                            akcent, więc 😁.
                        </p>
                        <br />
                        <Image src={reactImage} alt='reactImage' />
                    </>
                }
            />
        </Main>
    </>
);
