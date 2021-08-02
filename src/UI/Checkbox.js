import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

const CheckboxContainer = styled.div`
    display: flex;
    height: 20px;
    width: 20px;
    border: 2px solid grey;
    border-radius: 3px;
    margin-top: 5px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    opacity: 0;
`;

const Icon = styled.svg`
    color: blue;
`;

const StyledCheckbox = styled.div`

  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? 'teal' : 'papayawhip')}
  border-radius: 3px;
  transition: all 150ms;
  margin-left:-13px;
 
    ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px salmon;
    border-radius: 2px;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }`;

const Checkbox = ({ checked, ...props }) => {
    return (
        <div>
            <CheckboxContainer>
                <HiddenCheckbox checked={checked} {...props} />
                <StyledCheckbox checked={checked}>
                    <Icon>
                        <AiOutlineCheck />
                    </Icon>
                </StyledCheckbox>
            </CheckboxContainer>
        </div>
    );
};

export default Checkbox;
