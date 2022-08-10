import MyEditor from "@/components/MyEditor";
import { useState } from "react";

const myEditorPage = () => {
    const [value, setValue] = useState<string>('');
    return (
        <>
            <MyEditor value={value} onChange={setValue} />
            <div style={{ marginTop: '15px' }}>
                {value.replaceAll('<br>', '<br />')}
            </div>
        </>
    )
}

export default myEditorPage;