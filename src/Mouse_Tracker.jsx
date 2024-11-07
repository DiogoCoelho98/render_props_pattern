import { useEffect, useState } from "react";

export default function Mouse_Tracker({ render }) {
  const [mouse_position, set_mouse_position] = useState({ x: 0, y: 0 });

  useEffect(function () {
    const handle_mouse_position = (e) => {
      set_mouse_position({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handle_mouse_position);
    return function () {
      window.removeEventListener("mousemove", handle_mouse_position);
    };
  }, []);
  console.log(mouse_position);
  return render(mouse_position);
}
