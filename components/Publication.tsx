import React from "react";

interface PublicationProps {
    title: string;
    publication: string;
    year: number;
    authors: string;
    code?: string;
    link?: string;
}

const Publication: React.FC<PublicationProps> = (props: PublicationProps) => {
    return (
        <div>
            <b>{props.title}</b>
            <p>{props.authors}</p>
            <p>
                <em>{props.publication}</em>, {props.year}
            </p>
            <div className="links">
                {props.link && (
                    <a className="pubLink" href={props.link}>
                        Paper
                    </a>
                )}
                {props.code && (
                    <a className="codeLink" href={props.code}>
                        Code
                    </a>
                )}
            </div>
        </div>
    );
};

export default Publication;
