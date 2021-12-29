import styled from "styled-components";

export const Section = styled.section`
  margin-top: 60px;
`;
export const SpanBorder = styled.span`
 &.divider{
   border : 1px solid #5acba1 ;
   padding: 0px;
   background-color: #5acba1;
   }
`
export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  margin: 15px 200px 5px auto;
  gap: 15px;
  cursor: pointer;
  padding-bottom: 30px;
  span{
    cursor: pointer;
    padding: 5px;
  }
`;

type viewIconsProps = {
  isListView : boolean
}
export const ViewIcon = styled.i<viewIconsProps>` 
   &.fa-list{
     ${(props) => props.isListView ? `color: #5acba1;` : `color: black;` }
   }
   &.fa-th-large{
     ${props => !props.isListView ? `color: #5acba1;` : `color: black;` }
  }
`
