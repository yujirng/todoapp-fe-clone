import cls from "classnames";

import { IIcon, IconSizeType } from "../../types";
import { FC } from "react";

interface IconProps {
  item: IIcon;
}

const Icon: FC<IconProps> = ({ item }) => {
  return (
    <i
      className={cls(
        "myicons",
        item.className,
        item.name
        // , `size-${item.size}`
      )}
      onClick={item.onClick}
      style={(item.styles, { fontSize: `${item.size}px` })}
    ></i>
  );
};

export default Icon;
