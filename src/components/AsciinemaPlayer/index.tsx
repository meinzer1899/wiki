import React, {useEffect, useRef} from 'react';
import * as AsciinemaPlayerLibrary from 'asciinema-player';
import 'asciinema-player/dist/bundle/asciinema-player.css';

type AsciinemaPlayerProps = {
  src: string;
  // START asciinemaOptions
  cols: string;
  rows: string;
  autoPlay: boolean;
  preload: boolean;
  loop: boolean | number;
  startAt: number | string;
  speed: number;
  idleTimeLimit: number;
  theme: string;
  poster: string;
  fit: string;
  fontSize: string;
  // END asciinemaOptions
};

export default function AsciinemaPlayer({
  src,
  ...asciinemaOptions
}: React.FC<AsciinemaPlayerProps>) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    AsciinemaPlayerLibrary.create(src, currentRef, asciinemaOptions);
  }, [src]);

  return <div className={'asciinema-slim'} ref={ref} />;
}
