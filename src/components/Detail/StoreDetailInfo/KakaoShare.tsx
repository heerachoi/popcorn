// library
import { useEffect } from 'react';
// API
import { WEB_API } from '../../../services/api';
// types
import { Store } from '../../../types/data/storeInterface';
// style
import styled from 'styled-components';
import shareImg from '../../../assets/Img/shareImg.svg';

interface Props {
  detailData: Store;
}

const KakaoShare = ({ detailData }: Props) => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('89784cc6b64373d03c202e76af427626');
      window.Kakao.isInitialized(); // init되면 true, 아니면 false를 반환한다
    }
  }, []);

  const shareKakao = () => {
    window.Kakao.Share.createDefaultButton({
      container: '#KakaoShareBtn',
      objectType: 'feed',
      content: {
        title: detailData.title,
        description: '#' + detailData.item,
        imageUrl: detailData.imgURL[0],
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: `${WEB_API}`,
          webUrl: `${WEB_API}`,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: `${WEB_API}`,
            webUrl: `${WEB_API}`,
          },
        },
      ],
    });
  };

  return (
    <div id="KakaoShareBtn">
      <KakaoImgBtn onClick={shareKakao}>
        <img src={shareImg} />
      </KakaoImgBtn>
    </div>
  );
};

export default KakaoShare;

export const KakaoImgBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  width: 35px;
  height: 18px;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  font-size: 16px;

  img {
    width: 20px;
  }
  @media screen and (max-width: 700px) {
    font-size: 12px;
  }
`;
