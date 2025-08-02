import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addContentAction } from "../Reducers/contentReducer";

const AddContentComponent = ()=> {

    const contentRef = useRef();
    const dispatch = useDispatch();

    return <div>
        <h3>Add Content</h3>
        <input type="text" placeholder="Enter your content"  ref={contentRef}/>
        <button type='button' onClick={()=> dispatch(addContentAction(contentRef.current.value))}>Add</button>
    </div>;
}

export default AddContentComponent;