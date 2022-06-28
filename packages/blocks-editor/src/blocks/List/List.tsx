import { BlockModuleComponentProps, BlockPluginDefinition } from "../../types/types";
import BlockText, { BlockTextData } from "../Text";
import { ReactComponent as Icon } from "./assets/accordion.svg";

import { nanoid } from "nanoid";
import { ChangeEvent, useEffect, useState } from "react";

enum typeList {
  Unordered = "ul",
  Ordered = "ol",
}

export type BlockListData = {
  type: typeList;
  values: string[];
};

type listItemType = { id: string; value: string };

const types = [
  {
    label: "Ordered",
    value: typeList.Ordered,
  },
  {
    label: "Unordered",
    value: typeList.Unordered,
  },
];

function BlockListComponent({
  data,
  onUpdate,
}: BlockModuleComponentProps<BlockListData>) {
  const [listItems, setListItems] = useState<listItemType[]>([]);

  useEffect(() => {
    if (data.values) {
      setListItems(data.values.map((value) => ({ id: nanoid(), value })));
    }
  }, []);

  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    onUpdate({ ...data, type: e.target.value });
  };

  const addLine = () => {
    const newListItems = [...listItems, { id: nanoid(), value: "" }];
    setListItems(newListItems);
    onUpdate({ ...data, values: newListItems.map(({ value }) => value) });
  };

  const deleteLine = (id: string) => {
    const newListItems = listItems.filter(({ id: currentId }) => currentId !== id);
    setListItems(newListItems);
    onUpdate({ ...data, values: newListItems.map(({ value }) => value) });
  };

  const handleUpdateText = (listItem: listItemType, textData: BlockTextData) => {
    const newListItems = listItems.map(({ id, value }) => ({
      id,
      value: id === listItem.id ? textData.value : value,
    }));
    setListItems(newListItems);
    onUpdate({
      ...data,
      values: newListItems.map(({ value }) => value),
    });
  };

  return (
    <div className="BlockList">
      <div className="BlockList-config flex flex-col w-1/3 mb-4">
        <label htmlFor="title-level">Type</label>
        <select
          name="title-level"
          id="title-level"
          className="rounded-md border p-2"
          onChange={onChangeType}
          value={data.type}
        >
          {types.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="BlockList-list flex flex-col gap-4">
        {listItems.map((listItem) => (
          <div
            className="BlockList-line bg-white p-4 border-l-8 border-vermillon rounded-md"
            key={listItem.id}
          >
            <BlockText.component
              id={`text-${listItem.id}`}
              data={{ value: listItem.value }}
              onUpdate={(textData: BlockTextData) => {
                handleUpdateText(listItem, textData);
              }}
            />

            <button
              type="button"
              onClick={() => deleteLine(listItem.id)}
              disabled={listItems.length === 1}
              className={`${listItems.length === 1 ? "text-gray-400" : "text-error"}`}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        ))}
        <div className="text-center">
          <button
            type="button"
            className="BlockList-add font-semibold w-max border-2 border-vermillon text-vermillon hover:bg-vermillon hover:text-white px-2 md:px-4 md:py-1 rounded-md"
            onClick={addLine}
          >
            <i className="fa fa-plus"></i> Ajouter une ligne
          </button>
        </div>
      </div>
    </div>
  );
}

const initialData: BlockListData = {
  type: typeList.Unordered,
  values: [""],
};

const moduleType = {
  id: "blockList",
};

const BlockList: BlockPluginDefinition<BlockListData> = {
  type: moduleType,
  component: BlockListComponent,
  initialData,
  title: {
    default: "List",
    fr_FR: "Liste",
  },
  icon: Icon,
  description: {
    default: "Display a list",
    fr_FR: "Affiche une liste",
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockList",
  },
};

export default BlockList;
