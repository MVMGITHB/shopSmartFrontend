import NewsUi from "./NewsUi"

export const NewsBlog = ({url,cards}) => {
    return (
        <div>
            <NewsUi url={url} cards={cards}/>
        </div>
    )
}
