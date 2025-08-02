import { useSelector } from "react-redux";


const ContentCompoent = () => {
    const contentList = useSelector(state => state.contentData);
    return <div>
        <h3>Contents</h3>
        {contentList.content.map((content, index) => {return <span key={index}>{content}<br/></span>})}
    </div>;
}

export default ContentCompoent;