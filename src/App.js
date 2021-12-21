import styled from '@emotion/styled';

const Contenedor = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column-reverse;
   padding-top: 5rem;
`;

const Boton = styled.button`
   background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
   background-size: 300px;
   border: 2px solid #000;
   font-family: Arial, Helvetica, sans-serif;
   color: #fff;
   cursor: pointer;
   font-size: 2rem;
   margin-top: 3rem;
   padding: 1rem;
`;

function App() {
   const consultarApi = async () => {
      const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

      const frase = await api.json();
      console.log(frase[0]);
   };
   return (
      <Contenedor>
         <Boton onClick={consultarApi}>Obtener Frase</Boton>
      </Contenedor>
   );
}

export default App;
