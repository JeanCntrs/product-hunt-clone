import { useContext } from 'react';
import Search from '../ui/Search';
import Navigation from './Navigation';
import Button from '../ui/Button';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { FirebaseContext } from '../../firebase';

const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`;

const Header = () => {
    const { firebase, user } = useContext(FirebaseContext);

    return (
        <header css={css`
            border-bottom: 2px solid var(--gris3);
            padding: 1rem 0;
        `}>
            <HeaderContainer>
                <div css={css`display: flex; align-items: center;`}>
                    <Link href="/"><a><Logo>P</Logo></a></Link>
                    <Search />
                    <Navigation />
                </div>
                <div css={css`
                    display: flex;
                    align-items: center;
                `}>
                    {user
                        ? <>
                            <p css={css`margin-right: 2rem`}>Hola {user.displayName}</p>
                            <Button bgColor="true" onClick={() => firebase.signOff()}>Cerrar Sesión</Button>

                        </>
                        : <>
                            <Link href="/iniciar-sesion"><Button bgColor="true">Iniciar Sesión</Button></Link>
                            <Link href="/crear-cuenta"><Button>Crear Cuenta</Button></Link>
                        </>
                    }
                </div>
            </HeaderContainer>
        </header>
    );
}

export default Header;