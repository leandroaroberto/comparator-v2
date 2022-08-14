import { StyledComparator } from '../global.styled';


export const Comparator = ({products, setComputerA, setComputerB, computerA, computerB})  => {

  const handleChangeServerA = (event) => {
    setComputerA(event.target.value);
    setComputerB(event.target.value);
  };

  const handleChangeServerB = (event) => {
    setComputerB(event.target.value);
  };

  return (     
    <StyledComparator>
      <div className="boxA">
        <span>Server Models: </span>
        <select
          id="server-modela-select-helper"
          value={computerA}
          label="Server Models"
          onChange={handleChangeServerA}
        >
            <option>None</option>
            {
                products.length > 0 ? products.map(prod => (
                    <option key={prod.id} value={prod.id}>{prod.model_name}</option>
                )) : ''
            }
        </select>
      </div>
    <span> 
        versus 
    </span>
    <div className="boxB">
        <span>Server Models: </span>
        <select
          label="Server Models"
          value={computerB}
          onChange={handleChangeServerB}
        >
          <option>None</option>
          {
                products.length > 0 ? products.map(prod => (
                    <option key={prod.id} value={prod.id}>{prod.model_name}</option>
                )) : ''
            }
        </select>
      </div>
    </StyledComparator>
  );
}
