import styled from 'styled-components';
export const HomeWapper=styled.div`
  width:960px;
  margin:0 auto;
  overflow:hidden;
`;export const HomeLeft=styled.div`
  width:625px;
  margin-left:15px;
  padding-top:30px;
  float:left;
  .banner-img{
    width:628px;
    height:452px;
  }
`;
export const HomeRight=styled.div`
  width:280px;
  float:right;
`;
export const TopWrapper=styled.div`
overflow:hidden;
  padding: 20px 0 10px 0;
  border-bottom:1px solid #dcdcdc;
`;
export const TopicItem =styled.div `
    float: left;
    height: 32px;
    line-height: 32px;
    margin-bottom: 10px;
    margin-right: 10px;
    padding-right: 10px;
    font-size: 12px;
    background: #f7f7f7;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float:left;
        width: 32px;
        height: 32px;
        margin-right: 10px;  
    }
`;
export const ListItem=styled.div`
  padding: 20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  .pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:5px;
  }
`;
export const ListInfo=styled.div`
  width:500px;
  float:left;
  .title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color: #333;}
   .desc{
     color:#999;
     font-size:14px;
     line-height:18px;
   } 
  
`;
export const RecommedWraper=styled.div`
   width:280px;
   margin:30px 0;
`;
export const RecommedItem=styled.div`
   width:280px;
   height:50px;
   margin-top: 10px;
   background:url(${(props)=>props.imgUrl});
   background-size:cover;
   `;
 export const ContantMe=styled.div`
   width:278px;
   height:66px;
   margin-top:20px;
   border: 1px solid #ccc;
   border-radius:5px;
   .icon{
     display: block;
     float:left;
     width:50px;
     height:50px;
     padding-left:10px;  
     margin-top:8px;
   }
   .info{
      margin-top:8px;
     float:right;
     margin-right: 30px;
     .download{
       color: #333333;
       font-size:14px;
       margin-bottom:8px
     }
    
   }

  `;
   export const LoadMore=styled.div`
   width:100%px;
   height:40px;
   color: #fff;
   line-height: 40px;
   text-align:center;
   margin-top: 30px 0 ;
   background:#a5a5a5;
   border-radius:20px;
   cursor:pointer;
  `;
  export const BackTop=styled.div`
    position:fixed;
    right:100px;
    bottom:80px;
    width:50px;
    height:50px;
    line-height: 50px;
    border: 1px solid #ccc;
    font-size: 12px;
    text-align:center;
    cursor:pointer;
  `;
 