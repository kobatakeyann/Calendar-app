import styles from "@/ts/pages/home/components/calendar/event/components/registration_modal/color_picker/color_picker.module.css";
import { colorCodes } from "@/ts/pages/home/components/calendar/event/components/registration_modal/color_picker/helper/color";
import { colorPickerProps } from "@/ts/pages/home/components/calendar/type";
import React, { useEffect, useState } from "react";

export default function ColorPicker(props: colorPickerProps) {
  const [selectedColor, setSelectedColor] = useState<string>("red");
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
          {Object.entries(colorCodes)
            .slice(0, 5)
            .map(([colorName, colorCode]) => (
              <div
                key={colorName}
                onClick={() => handleColorClick(colorCode)}
                className={`${styles.colorCircle} ${styles[colorName]} `}
              >
                {selectedColor === colorCode && (
                  <span className={styles.selected}>✔️</span>
                )}
              </div>
            ))}
        </div>
        <div className={styles.flex}>
          {Object.entries(colorCodes)
            .slice(5)
            .map(([colorName, colorCode]) => (
              <div
                key={colorName}
                onClick={() => handleColorClick(colorCode)}
                className={`${styles.colorCircle} ${styles[colorName]} `}
              >
                {selectedColor === colorCode && (
                  <span className={styles.selected}>✔️</span>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
