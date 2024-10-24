import React, { useEffect, useState } from "react";
import * as styles from "./slider.module.css";

const Slider = () => {
    const colors = [
        "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFBE0B",
        "#845EC2", "#FF9671", "#59B5E6", "#2ECC71", "#F39C12"
    ];
    
    const initialIndex = colors.length - 1;
    const [startIndex, setStartIndex] = useState(initialIndex);
    const [isActive, setIsActive] = useState(true); // コンポーネントのアクティブ状態を管理

    const getVisibleColors = (currentIndex) => {
        return [
            colors[(currentIndex - 1 + colors.length) % colors.length],
            colors[currentIndex],
            colors[(currentIndex + 1) % colors.length]
        ];
    };

    const [visibleColors, setVisibleColors] = useState(getVisibleColors(initialIndex));

    useEffect(() => {
        let timer;

        // ページがアクティブな時だけタイマーを動かす
        if (isActive) {
            timer = setInterval(() => {
                setStartIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % colors.length;
                    setVisibleColors(getVisibleColors(newIndex));
                    return newIndex;
                });
            }, 2000);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isActive]); // isActiveの変更を監視

    // ページの表示/非表示状態を監視
    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsActive(!document.hidden);
        };

        // ページの表示/非表示イベントリスナーを設定
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // クリーンアップ関数
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    // メモリリーク防止のためアンマウント時にクリーンアップ
    useEffect(() => {
        return () => {
            setIsActive(false);
        };
    }, []);

    return (
        <div className={styles.slider}>
            {visibleColors.map((color, index) => (
                <div
                    key={index}
                    className={`${styles.colorBox} ${index === 1 ? styles.active : ''}`}
                    style={{ backgroundColor: color }}
                />
            ))}
        </div>
    );
}

export default Slider;
