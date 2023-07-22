import { Popover, Transition } from '@headlessui/react';
import { Units } from 'ol/control/ScaleLine';
import { useScaleLineStore } from './scaleLineStore';

interface ScaleLinePopoverProps {
  isPopoverOpen: boolean;
  handleIsPopoverOpen: () => void;
}

export const ScaleLinePopover = ({
  isPopoverOpen,
  handleIsPopoverOpen,
}: ScaleLinePopoverProps) => {
  const options = useScaleLineStore((state) => state.options);
  const updateUnits = useScaleLineStore((state) => state.updateUnits);
  const updateType = useScaleLineStore((state) => state.updateType);

  return (
    <Transition show={isPopoverOpen}>
      <Popover className="fixed bottom-4 right-4">
        <div
          className="
          h-[calc(100vh/2)] w-[calc(100vw-32px)] 
          overflow-auto rounded-md bg-gray-600 shadow
          shadow-gray-700 md:h-[calc(100vh-168px)] md:w-80 lg:h-[calc(100vh-88px)]
          "
        >
          <Popover.Panel static>
            <div className="grid gap-2">
              <div className="sticky inset-0 grid place-items-center bg-gray-600 text-gray-100">
                <div className="flex h-12 w-full items-center justify-between pl-4">
                  <p className="font-bold">Scale Line</p>
                  <button
                    className="grid h-11 w-11 place-items-center"
                    onClick={handleIsPopoverOpen}
                  >
                    <p>X</p>
                  </button>
                </div>
              </div>
              <div className="grid gap-4 px-4 text-gray-100">
                <div className="flex items-center gap-2">
                  <label htmlFor="scale_line_units">Unidade de Medida:</label>
                  <select
                    className="text-slate-800"
                    name="scale_line_units"
                    id="scale_line_units"
                    value={options.units}
                    onChange={(e) => updateUnits(e.target.value as Units)}
                  >
                    <option value="metric">metric</option>
                    <option value="imperial">imperial</option>
                    <option value="us">us</option>
                    <option value="nautical">nautical</option>
                    <option value="degrees">degrees</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="scale_line_type">Tipo:</label>
                  <select
                    className="text-slate-800"
                    name="scale_line_type"
                    id="scale_line_type"
                    value={options.bar ? 'bar' : 'line'}
                    onChange={(e) => updateType(e.target.value === 'line' ? false : true)}
                  >
                    <option value="line">Linha</option>
                    <option value="bar">Barra</option>
                  </select>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </div>
      </Popover>
    </Transition>
  );
};
