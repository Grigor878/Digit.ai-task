import { useRef } from "react";
import { useSelector } from "react-redux";
import { capitalize } from "../../helpers/formatters";
import { getImageUrl, handleExportHTML } from "../../helpers/utils";
import { Button } from "../inputs/button";
import styles from "./result.module.scss";

export const Result = () => {
    const { layout, template } = useSelector((state) => state.main)

    const resultImg = layout + capitalize(template)

    const wrapperRef = useRef(null);

    return (
        <div className={styles.result}>
            <div ref={wrapperRef}>
                <img src={getImageUrl(resultImg)} alt="resultImg" />
            </div>
            <Button text="Export as HTML" onClick={() => handleExportHTML(wrapperRef, resultImg)} />
        </div>
    );
};
