import { useState } from "react";

export default function With_Toggles() {
  return function List(props) {
    const [is_open, set_is_open] = useState(true);
    const [is_collapsed, set_is_collapsed] = useState(false);

    const display_items = is_collapsed ? props.item.slice(0, 3) : props.items;

    function toggle_open() {
      set_is_open((is_open) => !is_open);
      set_is_collapsed(false);
    }
  };
}
