import {StyledHeader} from "./HeaderStyled";
import {HiMagnifyingGlassCircle} from "react-icons/hi2";

const Header = () => {
    return (
      <StyledHeader>
             <div className="title">
                 <h1 className="name1">Controle de Roupas</h1>
             </div>
             <label>
                <input 
                   type="text"
                   placeholder="Pesquisar"
                 /> 
                 <HiMagnifyingGlassCircle className="lupa"/>
             </label>
      </StyledHeader>
    );
  }
  
  export default Header;