import { useEffect, useState } from "react";
import { ContentType } from "../types/contentTypes.ts";
import { getTrendingContent } from "../api/content.ts";
import { ContentCard } from "./ContentCard";

type ContentHolderProps = {
    url: string,
    pTitle: string
}

export const ContentHolder = ({ url, pTitle }: ContentHolderProps) => {
    const [content, setContent] = useState<ContentType[]>([]);

    useEffect(() => {
        const fetchContent = async () => {
            setContent(await getTrendingContent(url));
        }
        fetchContent();
    }, [url]);

    return (
        <>
            <h2>{pTitle}</h2>
            <div style={{ width: "100%" }}>
                {
                    content.map((content) => {
                        return <ContentCard key={content.id} content={content} />
                    })
                }
            </div>
        </>
    );
};
