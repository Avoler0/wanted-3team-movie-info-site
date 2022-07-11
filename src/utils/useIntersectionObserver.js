import React from "react";

const options = {
  root: null, // 뷰포트로 사용할 요소, 기본값은 브라우저의 뷰포트
  rootMargin: "0px", // root의 마진, 기본값은 0. px나 % 사용
  threshold: 0.5, // 요소의 몇%가 보일때 작동할 것인지
};

const useIntersectionObserver = (ref, callback) => {
  const onIntersection = ([entry], _observer) => {
    if (entry.isIntersecting) {
      console.log("call");
      callback();
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return [ref];
};

export default useIntersectionObserver;
