// Style
import * as S from './style';
import COLORS from '../../../assets/CSS/colors';
import smallLike from '../../../assets/Img/smallLike.svg';
import smallSad from '../../../assets/Img/smallSad.svg';
import smallWow from '../../../assets/Img/smallWow.svg';
import smallHeart from '../../../assets/Img/smallHeart.svg';
import smallGreenDefault from '../../../assets/Img/smallGreenDefault.svg';

const ContactUs = () => {
  return (
    <S.contactUsWarp>
      <S.cardBox>
        <S.background>
          <S.Img src={smallLike} />
        </S.background>
        <S.TextBox>
          <S.TitleText>Front End</S.TitleText>
          <S.NameText>HeeRa Choi</S.NameText>
          <S.LinkWarp>
            <S.LinkBox>
              <S.LinkText>Github Link</S.LinkText>
              <S.Alink href="https://github.com/heerachoi">
                https://github.com/heerachoi
              </S.Alink>
            </S.LinkBox>
            <S.LinkBox>
              <S.LinkText>Blog Link</S.LinkText>
              <S.Alink href="https://codesign.tistory.com/">
                https://codesign.tistory.com/
              </S.Alink>
            </S.LinkBox>
          </S.LinkWarp>
        </S.TextBox>
      </S.cardBox>
      <S.cardBox>
        <S.background>
          <S.Img src={smallSad} />
        </S.background>
        <S.TextBox>
          <S.TitleText>Front End</S.TitleText>
          <S.NameText>JaeChang Han</S.NameText>
          <S.LinkWarp>
            <S.LinkBox>
              <S.LinkText>Github Link</S.LinkText>
              <S.Alink href="https://github.com/JAECHANGG">
                https://github.com/JAECHANGG
              </S.Alink>
            </S.LinkBox>
            <S.LinkBox>
              <S.LinkText>Blog Link</S.LinkText>
              <S.Alink href="https://velog.io/@abcwockd95">
                https://velog.io/@abcwockd95
              </S.Alink>
            </S.LinkBox>
          </S.LinkWarp>
        </S.TextBox>
      </S.cardBox>
      <S.cardBox>
        <S.background>
          <S.Img src={smallWow} />
        </S.background>
        <S.TextBox>
          <S.TitleText>Front End</S.TitleText>
          <S.NameText>JiEun Han</S.NameText>
          <S.LinkWarp>
            <S.LinkBox>
              <S.LinkText>Github Link</S.LinkText>
              <S.Alink href="https://github.com/yjyyls">
                https://github.com/yjyyls
              </S.Alink>
            </S.LinkBox>
            <S.LinkBox>
              <S.LinkText>Blog Link</S.LinkText>
              <S.Alink href="https://yjyyls6.tistory.com/">
                https://yjyyls6.tistory.com/
              </S.Alink>
            </S.LinkBox>
          </S.LinkWarp>
        </S.TextBox>
      </S.cardBox>
      <S.cardBox>
        <S.background>
          <S.Img src={smallHeart} />
        </S.background>
        <S.TextBox>
          <S.TitleText>Front End</S.TitleText>
          <S.NameText>YuAn Kim</S.NameText>
          <S.LinkWarp>
            <S.LinkBox>
              <S.LinkText>Github Link</S.LinkText>
              <S.Alink href="https://github.com/innasz">
                https://github.com/innasz
              </S.Alink>
            </S.LinkBox>
            <S.LinkBox>
              <S.LinkText>Blog Link</S.LinkText>
              <S.Alink href="https://velog.io/@innasz">
                https://velog.io/@innasz
              </S.Alink>
            </S.LinkBox>
          </S.LinkWarp>
        </S.TextBox>
      </S.cardBox>
      <S.cardBox>
        <S.background>
          <S.Img src={smallGreenDefault} />
        </S.background>
        <S.TextBox>
          <S.TitleText style={{color:`${COLORS.green1}`}}>Designer</S.TitleText>
          <S.NameText>HyunSil Choi</S.NameText>
          <S.LinkWarp style={{marginTop:'35px'}}>
            <S.LinkBox >
              <S.LinkText>Portfolio Link</S.LinkText>
              <S.Alink href="https://hyunsilchoi.creatorlink.net/">
                https://hyunsilchoi.creatorlink.net/
              </S.Alink>
            </S.LinkBox>
          </S.LinkWarp>
        </S.TextBox>
      </S.cardBox>
    </S.contactUsWarp>
  );
};

export default ContactUs;
