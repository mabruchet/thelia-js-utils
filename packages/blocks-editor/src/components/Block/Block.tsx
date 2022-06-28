import * as React from "react";

import BlockControls from "../BlockControls";
import { IBlock } from "../../types/types";
import { useBlocksContext } from "../../hooks/useBlockContext";
import { usePlugins } from "../../hooks/usePlugins";
import Tippy from "@tippyjs/react";

const Block = ({
  block,
  inLayout = false,
  className = "",
  DndDragHandle,
}: {
  block: IBlock;
  inLayout?: boolean;
  className?: string;
  DndDragHandle: () => JSX.Element;
}) => {
  const { findBlockIndex, updateBlock } = useBlocksContext();

  const blockIndex = findBlockIndex(block.id);

  const plugins = usePlugins();

  const currentPlugin = plugins.find((plugin) => plugin.type.id === block.type.id);

  if (!currentPlugin) {
    return (
      <div
        style={{
          backgroundColor: "red",
          padding: "1rem",
          margin: "1rem 0",
        }}
      >
        <div>Unsupported Block</div>
        <BlockControls
          blockIndex={blockIndex}
          blockId={block.id}
          DndDragHandle={DndDragHandle}
        />
      </div>
    );
  }

  const { component: Component, icon: Icon } = currentPlugin;

  return (
    <div
      className={`Block mb-3 py-5 rounded-md ${className} ${
        inLayout
          ? "bg-pearlLight shadow-md px-4 md:px-11"
          : "bg-gradient-to-b from-pearlMedium to-pearlLight px-4 py-12 md:px-32 lg:px-48 xl:px-72"
      }`}
    >
      <div className="flex justify-between mb-6">
        <div className="flex items-center gap-4">
          {!inLayout && <Icon />}

          <div
            className={`${inLayout ? "font-bold text-base" : "font-extrabold text-xl"}`}
          >
            {currentPlugin.title.fr_FR}
          </div>

          <Tippy content={<span>{currentPlugin?.description?.fr_FR}</span>}>
            <i className="fa fa-info-circle cursor-help"></i>
          </Tippy>
        </div>
        <BlockControls
          blockIndex={blockIndex}
          inLayout={inLayout}
          blockId={block.id}
          DndDragHandle={DndDragHandle}
        />
      </div>
      <Component data={block.data} onUpdate={(data: {}) => updateBlock(block.id, data)} />
    </div>
  );
};

export default Block;
