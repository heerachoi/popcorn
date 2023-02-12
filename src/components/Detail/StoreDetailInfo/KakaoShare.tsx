import { useEffect } from 'react';

interface Props {
  detailData: any;
}

const KakaoShare = ({ detailData }: Props) => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('89784cc6b64373d03c202e76af427626');
      window.Kakao.isInitialized(); // init되면 true, 아니면 false를 반환한다
    }
  }, []);
  //   console.log(detailData.imgURL);
  console.log(detailData);
  const shareKakao = () => {
    window.Kakao.Share.createDefaultButton({
      container: '#KakaoShareBtn',
      objectType: 'feed',
      content: {
        title: '팝업스토어 popcorn과 함께하세요!',
        // description: '팝업스토어 popcorn과 함께하세요!',
        imageUrl: detailData.imgURL[0],
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: 'https://localhost:3000',
          webUrl: 'https://localhost:3000',
        },
      },
      itemContent: {
        titleImageUrl: detailData.imgURL[0],
        titleImageText: detailData.title,
        titleImageCategory: detailData.item,
        items: [
          {
            item: '주소',
            itemOp: detailData.address,
          },
        ],
        sum: '운영기간',
        sumOp: detailData.open + '~' + detailData.close,
      },
      social: {
        // 나중에 글 추천수의 데이터를 받아와서 바꿔줌
        likeCount: 286,
        // 나중에 글 조회수의 데이터를 받아와서 바꿔줌
        // 조회수: 45,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'https://localhost:3000',
            webUrl: 'https://localhost:3000',
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: 'https://localhost:3000',
            webUrl: 'https://localhost:3000',
          },
        },
      ],
    });
  };

  return (
    <div id="KakaoShareBtn">
      <button onClick={shareKakao}>
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          alt="카카오링크 보내기 버튼"
        />
      </button>
    </div>
  );
};

export default KakaoShare;
