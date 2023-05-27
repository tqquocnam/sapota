import { Fragment, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

type IComp = {
  isVisible: boolean;
  className?: string;
  children: React.ReactNode;
};

export const ModalWrapper = ({
  isVisible,
  className = "fixed top-[74px] bottom-0 left-0 right-0 bg-white z-50",
  children,
}: IComp) => {
  useEffect(() => {
    if (isVisible) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [isVisible]);
  return (
    <Fragment>
      {isVisible ? <div className={className}>{children}</div> : null}
    </Fragment>
  );
};
