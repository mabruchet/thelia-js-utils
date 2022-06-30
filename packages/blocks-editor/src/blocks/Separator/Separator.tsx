import { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { Text, Select } from "../../components/Inputs";
import { BlockModuleComponentProps } from "../../types/types";
import { ReactComponent as Icon } from "./assets/separator.svg";

export type BlockSeparatorData = {
  type: string;
  size: number;
};

const types = [
  { label: "Espace", value: "space" },
  { label: "Bordure", value: "hr" },
];

const initialData = {
  type: "space",
  size: 1,
};

const BlockSeparatorComponent = ({
  data,
  onUpdate,
}: BlockModuleComponentProps<BlockSeparatorData>) => {
  const [type, setType] = useState<string>(initialData.type);
  const [size, setSize] = useState<number>(initialData.size);

  useEffect(() => {
    if (data.type) {
      setType(data.type);
    }

    if (data.size) {
      setSize(data.size);
    }
  }, [data]);

  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    onUpdate({ ...data, type: e.target.value });
  };

  const onChangeSize = (e: ChangeEvent<HTMLInputElement>) => {
    setSize(+e.target.value);
  };

  const onBlurSize = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onUpdate({ ...data, size: +e.target.value });
    }
  };

  return (
    <div className="BlockSeparator" data-type={type}>
      <div className="BlockSeparator-field">
        <div className="flex justify-between">
          <div className="flex flex-col w-full md:w-1/2 mb-6">
            <Select
              className="rounded-md mb-4"
              name="separator-type"
              id="separator-type"
              onChange={onChangeType}
              value={type.toString()}
              label="Style du séparateur"
            >
              {types.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>

            <label htmlFor="separator-size">Taille du séparateur</label>
            <input
              type="number"
              name="separator-size"
              id="separator-size"
              className="rounded-md"
              value={size.toString()}
              onChange={onChangeSize}
              onBlur={onBlurSize}
            />
          </div>
        </div>
      </div>
      <div className="border-dotted border rounded-md p-4 border-black">
        {type === "hr" ? <div className="bg-black h-px"></div> : null}
      </div>
    </div>
  );
};

const moduleType = {
  id: "blockSeparator",
};

const BlockSeparator = {
  type: moduleType,
  component: BlockSeparatorComponent,
  initialData,
  title: {
    default: "Separator",
    fr_FR: "Séparateur",
  },
  icon: Icon,
  description: {
    default: "Display a separator",
    fr_FR: "Affiche un séparateur",
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockSeparator",
  },
};

export default BlockSeparator;
