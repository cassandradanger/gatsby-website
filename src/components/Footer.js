import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';
import { Content } from './Layout';
import { media } from '../MediaQueries';

const FooterWrapper = styled.div`
  background: ${Colors.darkest};
  color: ${Colors.white};
  padding: ${props => (props.big ? '210px' : props.medium ? '100px' : '80px')} 0 60px 0;
  ${media.tablet`padding: ${props => (props.big ? '150px' : props.medium ? '100px' : '128px')} 20px 50px 20px;`}
`;

const Copyright = styled.p`
  text-align: center;
`;

const Footer = ({ big, medium }) => (
  <FooterWrapper {...big && { big }} {...medium && { medium }}>
    <Content>
      <Copyright white align="center">
      <img src="https://boardgamegeek.com/jswidget.php?username=CassandraDanger&numitems=5&header=1&text=title&images=small&show=recentplays&imagesonly=1&imagepos=right&showplaydate=1&domains%5B%5D=boardgame&imagewidget=1" border="0"/>
        © Name Surname 2019. All rights reserved.
      </Copyright>
    </Content>
  </FooterWrapper>
);

export default Footer;
