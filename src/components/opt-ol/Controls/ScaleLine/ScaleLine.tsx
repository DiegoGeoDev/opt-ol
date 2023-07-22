import { useContext, useEffect, useState } from 'react';

import { ScaleLine as OlScaleLine } from 'ol/control';
import { Options as OlScaleLineOptions } from 'ol/control/ScaleLine';

import { Scaling } from 'lucide-react';

import {
  ControlButton,
  ControlButtonProps,
} from '../../../ui/ControlButton/ControlButton';
import { ScaleLinePopover } from './ScaleLinePopover';

import { IMapContext, MapContext } from '../../Map/MapContext';
import { useScaleLineStore } from './scaleLineStore';

interface IScaleLineProps extends OlScaleLineOptions, ControlButtonProps {
  canChangeOptions?: boolean;
}

export const ScaleLine = ({ canChangeOptions = false, ...props }: IScaleLineProps) => {
  const { map } = useContext(MapContext) as IMapContext;

  const options = useScaleLineStore((state) => state.options);
  const updateInitialOptions = useScaleLineStore((state) => state.updateInitialOptions);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  function handleIsPopoverOpen() {
    setIsPopoverOpen(!isPopoverOpen);
  }

  console.log(options);

  useEffect(() => {
    updateInitialOptions({
      units: options.units ?? props.units,
      bar: options.bar ?? props.bar,
    });
  }, []);

  useEffect(() => {
    if (!map) return;

    let scaleLineControl = new OlScaleLine(options);
    map.addControl(scaleLineControl);

    return () => {
      if (map) {
        map.removeControl(scaleLineControl);
      }
    };
  }, [map, options]);

  return (
    <>
      {canChangeOptions ? (
        <>
          <ControlButton
            title={props.title}
            className={props.className}
            onClick={handleIsPopoverOpen}
          >
            <Scaling />
          </ControlButton>
          <ScaleLinePopover
            isPopoverOpen={isPopoverOpen}
            handleIsPopoverOpen={handleIsPopoverOpen}
          />
        </>
      ) : null}
    </>
  );
};
