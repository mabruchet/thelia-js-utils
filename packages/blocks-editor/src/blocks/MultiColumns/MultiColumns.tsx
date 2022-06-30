import { useEffect, useState } from "react";
import AddBlocks from "../../components/AddBlocks";
import Block from "../../components/Block";
import { BlockContextProvider } from "../../providers/BlockContext";
import { ReactComponent as Icon } from "./assets/column.svg";
import produce from "immer";
import { useBlocksContext } from "../../hooks/useBlockContext";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import useWindowSize from "../../hooks/useWindowSize";
import LayoutHeader from "../../components/LayoutHeader";
import { BlockModuleComponentProps, IBlock } from "../../types/types";

type ColumnData = IBlock[];

type MultiColumnsData = ColumnData[];

export type MultiColumnsComponentProps = {
  data: MultiColumnsData;
};

const NestedColumn = ({ onUpdate }: { onUpdate: Function }) => {
  const { blockList, moveBlockTo } = useBlocksContext();
  const { DndWrapper, DndWrapElement } = useDragAndDrop();

  useEffect(() => {
    onUpdate(blockList);
  }, [blockList]);

  const onDragEnd = (e: any) => {
    if (e.destination) {
      moveBlockTo(e.source.index, e.destination.index);
    }
  };

  return (
    <>
      {blockList.length > 0 && (
        <DndWrapper id="main" onDragEnd={onDragEnd}>
          {blockList.map((block, index) => (
            <DndWrapElement key={block.id} id={block.id} index={index}>
              {({ DndDragHandle }: { DndDragHandle: () => JSX.Element }) => (
                <Block
                  DndDragHandle={DndDragHandle}
                  inLayout
                  key={index}
                  className="border-l-8 border-l-lighterVermillon"
                  block={block}
                />
              )}
            </DndWrapElement>
          ))}
        </DndWrapper>
      )}
    </>
  );
};

export const ColumnIcon = ({
  cols,
  currentCol,
  asIcon,
}: {
  cols: number;
  currentCol?: number;
  asIcon?: boolean;
}) => {
  const { width } = useWindowSize();

  return (
    <div
      className={`h-2 rounded-full flex overflow-hidden border ${
        asIcon ? "bg-darkCharbon border-darkCharbon" : "bg-pearlMedium border-pearlMedium"
      }`}
      style={{ minWidth: width > 1024 ? "60px" : "40px" }}
    >
      {[...Array(cols)].map((_, index) => (
        <div
          key={index}
          style={{ width: 100 / cols + "%" }}
          className={`${index !== cols - 1 ? "mr-px" : ""} ${
            currentCol === index
              ? "bg-white"
              : asIcon
              ? "bg-pearlMedium"
              : "bg-mediumCharbon"
          }`}
        ></div>
      ))}
    </div>
  );
};

const ColumnComponent = ({
  column,
  index,
  data,
  onUpdate,
}: BlockModuleComponentProps<MultiColumnsData>) => {
  const [open, setOpen] = useState(true);
  const { width } = useWindowSize();

  return (
    <div
      key={index}
      className="flex flex-col rounded-md shadow-md border-l-8 border-l-vermillon bg-white"
    >
      <LayoutHeader
        title={`Colonne #${index + 1}`}
        open={open}
        setOpen={setOpen}
        icon={width > 400 && <ColumnIcon cols={data.length} currentCol={index} />}
      />
      <div className={`xl:py-8 xl:px-10 px-6 py-4 ${!open && "hidden"}`}>
        <BlockContextProvider defaultBlocks={column}>
          <>
            <NestedColumn
              onUpdate={(columnNewData: IBlock[]) => {
                const nextState = produce(data, (draft) => {
                  draft[index] = columnNewData;
                });
                onUpdate(nextState);
              }}
            />

            <AddBlocks excludeLayout={["Column", "Accordion"]} />
          </>
        </BlockContextProvider>
      </div>
    </div>
  );
};

const MultiColumnsComponent = ({
  data,
  onUpdate,
}: BlockModuleComponentProps<MultiColumnsData>) => {
  return (
    <div className="flex flex-col gap-4 justify-between">
      {data.map((column, index) => {
        return (
          <ColumnComponent
            key={index}
            data={data}
            onUpdate={onUpdate}
            column={column}
            index={index}
          />
        );
      })}
    </div>
  );
};

const moduleLayout = "Column";

const moduleType = {
  id: "multiColumns",
};

const Column = {
  type: moduleType,
  component: MultiColumnsComponent,
  initialData: [[]],
  layout: moduleLayout,
  icon: Icon,
  title: {
    default: "Columns",
    fr_FR: "Colonnes",
  },
  description: {
    default: "Display blocks in multiple columns",
    fr_FR: "Affiche des blocks dans différentes colonnes",
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&multiColumns",
  },
};

const TwoColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "2cols" },
  title: {
    default: "2 Columns",
    fr_FR: "2 Colonnes",
  },
  layout: moduleLayout,
  initialData: [[], []],
  customIcon: <ColumnIcon asIcon cols={2} />,
};

const ThreeColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "3cols" },
  layout: moduleLayout,
  title: {
    default: "3 Columns",
    fr_FR: "3 Colonnes",
  },
  initialData: [[], [], []],
  customIcon: <ColumnIcon asIcon cols={3} />,
};

const FourColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "4cols" },
  layout: moduleLayout,
  title: {
    default: "4 Columns",
    fr_FR: "4 Colonnes",
  },
  initialData: [[], [], [], []],
  customIcon: <ColumnIcon asIcon cols={4} />,
};

const FiveColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "5cols" },
  layout: moduleLayout,
  title: {
    default: "5 Columns",
    fr_FR: "5 Colonnes",
  },
  initialData: [[], [], [], [], []],
  customIcon: <ColumnIcon asIcon cols={5} />,
};

const SixColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "6cols" },
  layout: moduleLayout,
  title: {
    default: "6 Columns",
    fr_FR: "6 Colonnes",
  },
  initialData: [[], [], [], [], [], []],
  customIcon: <ColumnIcon asIcon cols={6} />,
};

export { TwoColumns, ThreeColumns, FourColumns, FiveColumns, SixColumns };
