import styled from 'styled-components'
export const HeaderWrapper=styled.div`
    height:56px;
    border-bottom: 1px solid #f0f0f0;
    position:relative;
`;
export const Logo=styled.a`
  position:absolute;
  top:0;
  left:0;
  display:inline-block;
  width:100px;
  height:56px;
  line-height:56px;
  border-bottom: 1px solid #f0f0f0;
  background:url(https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png);
  background-size:contain;
  `;
 export const Nav=styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin: 0 auto;
`;
export const NavItem=styled.div`
  line-height:56px;
  padding:0 20px;
  color:#333;
  font-size:17px;

  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696; 
  }
  &.active{
    color:#ec7b68;
  }
`;
export const NavSearch=styled.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  margin-top:9px;
  padding: 0 20px;
  box-sizing:border-box;
  background:green;
  border:none;
  outline: none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  margin-left:20px;
  &::placeholder{
    color:999
  }
`;
export const Addition=styled.div`
  position:absolute;
  right:0px;
  top:0;
  height:56px;
`;
export const Button=styled.div`
  float:right;
  margin-top:9px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  padding:0 20px;
  margin-right:20px;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    background:#ec6149;
    color:#fff
  }

`;
