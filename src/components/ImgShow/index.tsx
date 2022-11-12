/** @format */
// @ts-check

import React, {type ReactNode} from "react";
import Loadable from "@loadable/component";
import Spinner from "@site/src/components/Spinner";
import styles from "./styles.module.css";

export default function ImgShow({
  img,
  alt,
  label,
  children,
  ...rest
}: {
  img: string;
  alt: string;
  label?: string;
  children: ReactNode;
  className?: string;
  height?: number;
  width?: number;
}): JSX.Element {
  const Image = Loadable(() => import("@theme/IdealImage"));
  return (
    <span className={styles.ImgClass}>
      <Image
        fallback={<Spinner />}
        alt={alt}
        img={img}
        aria-hidden={label ? undefined : true}
        aria-label={label || undefined}
        role='img'
        {...rest}>
        {children}
      </Image>
    </span>
  );
}
