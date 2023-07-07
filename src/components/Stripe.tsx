import { Fragment } from "react";
const count = 30;
const Blocks = () =>
  Array.from(Array(count).keys()).map((s) => (
    <Fragment key={s}>
      <span className="heading">
        <span className="stroke white">black friday weeks</span>
      </span>
      <span className="heading color-white">
        <span>black friday weeks</span>
      </span>
    </Fragment>
  ));
interface StripeStyleProps {
  transform: string;
}

interface StripeProps {
  options?: {
    style: StripeStyleProps;
  };
}

export const Stripe = (props: StripeProps) => {
  const style = {
    ...props.options?.style,
  };
  return (
    <div className="stripe" {...{ style }}>
      <Blocks />
    </div>
  );
};

Stripe.displayName = "Components_Stripe";
