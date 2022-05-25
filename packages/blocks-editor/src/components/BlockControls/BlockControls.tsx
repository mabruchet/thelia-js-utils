import * as React from "react";

import Tippy from "@tippyjs/react";
import useWindowSize from "../../hooks/useWindowSize";
import { useBlocksContext } from "../../hooks/useBlockContext";

const BlockControls = ({
  blockId,
  blockIndex,
  inLayout = false,
  DndDragHandle,
}: {
  blockId: string;
  blockIndex: number;
  inLayout?: boolean;
  DndDragHandle: () => JSX.Element;
}) => {
  // prettier-ignore
  const { blockList, removeBlock, moveBlockUp, moveBlockDown } = useBlocksContext();

  const { width } = useWindowSize();

  return (
    <div className="flex">
      {DndDragHandle && (
        <div
          className={`${
            !inLayout && width > 768
              ? "border-y-2 border-l-2 border-mediumGrey px-2 md:px-6"
              : "px-2 sm:px-3"
          } text-darkCharbon`}
        >
          <DndDragHandle />
        </div>
      )}

      <Tippy
        delay={[700, 0]}
        disabled={!inLayout && width > 768}
        content={"Monter l'élément"}
      >
        <button
          className={`${
            !inLayout && width > 768
              ? "border-y-2 border-l-2 border-mediumGrey px-2 md:px-6"
              : "px-2 sm:px-3"
          } ${blockIndex === 0 ? "text-gray-400" : "text-darkCharbon"}`}
          disabled={blockIndex === 0}
          onClick={() => moveBlockUp(blockIndex)}
        >
          <i className="fa fa-arrow-up"></i>
          {!inLayout && width > 768 ? " Monter" : ""}
        </button>
      </Tippy>

      <Tippy
        delay={[700, 0]}
        disabled={!inLayout && width > 768}
        content={"Descendre l'élément"}
        placement={"bottom"}
      >
        <button
          className={`${
            !inLayout && width > 768
              ? "border-2 border-mediumGrey px-2 md:px-6"
              : "px-2 sm:px-3"
          } ${
            blockIndex === blockList.length - 1 ? "text-gray-400" : "text-darkCharbon"
          }`}
          disabled={blockIndex === blockList.length - 1}
          onClick={() => moveBlockDown(blockIndex)}
        >
          <i className="fa fa-arrow-down"></i>
          {!inLayout && width > 768 ? " Descendre" : ""}
        </button>
      </Tippy>

      <Tippy
        delay={[700, 0]}
        disabled={!inLayout && width > 768}
        content={"Supprimer l'élément"}
        placement={"bottom"}
      >
        <button
          className={`${
            !inLayout && width > 768
              ? "border-y-2 border-r-2 border-mediumGrey px-2 md:px-6"
              : "px-2 sm:px-3"
          } text-error`}
          onClick={() => removeBlock(blockId)}
        >
          <i className="fa fa-trash-alt"></i>
          {!inLayout && width > 768 ? " Supprimer" : ""}
        </button>
      </Tippy>
    </div>
  );
};

export default BlockControls;
