import styles from "@/ts/pages/home/components/calendar/event/components/registration_modal/color_picker/color_picker.module.css";
import { colorCodes } from "@/ts/pages/home/components/calendar/event/components/registration_modal/color_picker/helper/color";
import { colorPickerProps } from "@/ts/pages/home/components/calendar/type";
import React, { useEffect, useState } from "react";

export default function ColorPicker(props: colorPickerProps) {
  const [selectedColor, setSelectedColor] = useState<string>(
    props.targetEvent!.color
  );
  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };
  useEffect(() => {
    props.setPutForm!({
      ...props.putForm,
      ["color"]: selectedColor,
    });
  }, [selectedColor]);
  return (
    <div className={styles.colorPickerArea}>
      <label className={styles.colorPickerLabel}>テーマ🎨</label>
      <div className={styles.colorCircleArea}>
        <div className={styles.flex}>
          {colorCodes.slice(0, 5).map((color) => (
            <div
              key={color}
              onClick={() => handleColorClick(color)}
              className={`${styles.colorCircle} ${styles[color]} `}
            >
              {selectedColor === color && (
                <span className={styles.selected}>✔️</span>
              )}
            </div>
          ))}
        </div>
        <div className={styles.flex}>
          {colorCodes.slice(5).map((color) => (
            <div
              key={color}
              onClick={() => handleColorClick(color)}
              className={`${styles.colorCircle} ${styles[color]} `}
            >
              {selectedColor === color && (
                <span className={styles.selected}>✔️</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
