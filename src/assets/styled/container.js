
import { device } from './device'

// const size = {
//     mobileS: '320px',
//     mobileM: '375px',
//     mobileL: '425px',
//     tablet: '768px',
//     laptop: '1024px',
//     laptopL: '1440px',
//     desktop: '2560px'
// }

export const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;

  @media ${device.mobile} {
    max-width: 90%;
  }
  @media ${device.tablet} {
    max-width: 85%;
  }
  @media ${device.laptop} {
    max-width: 70%;
  }
`