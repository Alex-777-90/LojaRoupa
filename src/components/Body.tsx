import {StyledBody} from "./BodyStyled";
import TestImage from "../image/liverpool.jpg";
import {BsPlusCircleFill, BsFillDashCircleFill} from "react-icons/bs"

const Body = () => {
  return (
    <StyledBody>
       <section className='aboutImage'>
          <h4>Nome: Camiseta do Liverpool</h4>
          <img src={TestImage} alt="imagem da roupa"/>
       </section>
       <section>
          <div className='details'>
             <h4>Quantidade: 77</h4>
             <h4>Valor total: 7600,00</h4>
          </div>
          <div className="buttons">
             <button >
                <BsPlusCircleFill className="buttons1"/>
             </button>
             <button >
                <BsFillDashCircleFill className="buttons2"/> 
             </button>
           </div>
       </section>
    </StyledBody>
  );
}

export default Body;


