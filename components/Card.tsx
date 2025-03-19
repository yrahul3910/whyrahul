import React from "react";

export interface CardProps {
    title: string;
    info: any;
    active?: boolean;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
    const click = (e: React.MouseEvent) => {
        // Toggle div visibility.
        e.currentTarget.parentElement?.classList.toggle("active");
        (e.currentTarget.nextSibling as HTMLElement).classList.toggle(
            "visible",
        );
    };

    let cName = props.active ? "visible" : "";
    return (
        <div className="card">
            <h2
                className="card-title"
                id={props.title.replace(" ", "")}
                onClick={click}
            >
                {props.title}
            </h2>
            <div id={"div" + props.title.replace(" ", "")} className={cName}>
                {props.info}
            </div>
        </div>
    );
};

export default Card;
