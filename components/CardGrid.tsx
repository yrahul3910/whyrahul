import React from "react";
import Card, { CardProps } from "./Card";

interface CardGridProps {
    cards: CardProps[];
    active?: boolean;
}

const CardGrid: React.FC<CardGridProps> = (props: CardGridProps) => {
    let cards = props.cards.map((data, i) => (
        <Card
            key={i}
            active={props.active}
            title={data.title}
            info={data.info}
        />
    ));
    return <div className="grid-parent">{cards}</div>;
};

export default CardGrid;
