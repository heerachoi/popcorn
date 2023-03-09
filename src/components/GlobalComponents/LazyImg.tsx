// library
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// component
import LoadingAnimation from './LoadingAnimation';
// style
import { DetailImg } from '../MapView/MapData/stlye';

const LazyImg = ({ src }: { src: string }) => {
  const [showList, setShowList] = useState<boolean>(false);
  const { ref, inView } = useInView({
    // inView를 통해 보여지는지 구분한다.
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !showList) {
      setShowList(true);
    }
  }, [inView, showList]);

  return (
    <div ref={ref}>
      {showList ? ( // showList의 값에 따라 로딩스크린을 표시하거나 상품을 보여준다.
        <div>
          <DetailImg src={src} />
        </div>
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
};

export default LazyImg;
